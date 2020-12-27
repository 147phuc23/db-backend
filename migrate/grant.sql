Use hospital;
-- Comment
CREATE PROCEDURE SelectDoctorListByShift(IN FROM_TIME TIME, IN TO_TIME time, IN dname varchar(100), IN date DATE)
BEGIN
    SELECT *
    FROM Doctor
    WHERE dssn IN (
        SELECT doctor_ssn
        FROM Shift
        WHERE fromtime = FROM_TIME
          AND totime = TO_TIME
          AND date = shiftdate)
      AND departmentName = dname;
END;

-- Comment
CREATE PROCEDURE SelectDoctorListByDate(IN dname varchar(100), IN date DATE)
BEGIN
    SELECT *
    FROM Doctor
    WHERE dssn in (
        SELECT doctor_ssn
        FROM Shift
        WHERE date = shiftdate)
      AND  departmentName = dname;
end;
-- Comment
CREATE PROCEDURE SelectDoctorListByShiftByDateAllDepartment(IN FROM_TIME TIME, IN TO_TIME time, IN date DATE)
BEGIN
    SELECT *
    FROM Doctor
    WHERE dssn in (
        SELECT doctor_ssn
        FROM Shift
        WHERE fromtime > FROM_TIME
          AND  totime < TO_TIME
          AND date = shiftdate
    );
end;
-- Comment
CREATE PROCEDURE SelectDoctorListByDateInAllDepartment(IN date DATE)
BEGIN
    SELECT *
    FROM Doctor
    WHERE dssn in (
        SELECT doctor_ssn
        FROM Shift
        WHERE date = shiftdate
    );
end;
-- Comment
CREATE PROCEDURE countPatientByShiftAndDateInDepartment(IN FROM_TIME TIME, IN TO_TIME time, IN dname varchar(100),
                                                        IN _date DATE)
BEGIN
    SELECT count(*)
    FROM Examination
    WHERE(
             SELECT id, doctor_ssn
             FROM Shift
             WHERE fromtime > FROM_TIME
               AND totime < TO_TIME
               AND _date = shiftdate
               AND dname = (SELECT departmentName
                            FROM Doctor
                            WHERE dssn = doctor_ssn
             )
         ) is not null
    group by medical_examination_id;

end;
-- Comment
CREATE PROCEDURE countInPatientByShiftAndDateInDepartment(IN FROM_TIME TIME, IN TO_TIME time, IN dname varchar(100),
                                                          IN _date DATE)
BEGIN
    SELECT count(*)
    FROM Examination
    WHERE(
             SELECT id, doctor_ssn
             FROM Shift
             WHERE fromtime > FROM_TIME
               AND totime < TO_TIME
               AND _date = shiftdate
               AND patient_ssn in (SELECT issn FROM InPatient)
               AND dname = (SELECT departmentName
                            FROM Doctor
                            WHERE dssn = doctor_ssn
             )
         ) is not null
    group by medical_examination_id;
end;
-- Comment
CREATE PROCEDURE countOutPatientByShiftAndDateInDepartment(IN FROM_TIME TIME, IN TO_TIME time, IN dname varchar(100),
                                                           IN _date DATE)
BEGIN
    SELECT count(*)
    FROM Examination
    WHERE(
             SELECT id, doctor_ssn
             FROM Shift
             WHERE fromtime > FROM_TIME
               AND totime < TO_TIME
               AND _date = shiftdate
               AND patient_ssn in (SELECT ossn FROM OutPatient)
               AND dname = (SELECT departmentName
                            FROM Doctor
                            WHERE dssn = doctor_ssn
             )
         ) is not null
    group by medical_examination_id;
end;
-- Comment
CREATE PROCEDURE countInPatientByShiftAndDateInAllDepartment(IN FROM_TIME TIME, IN TO_TIME time, IN _date DATE)
BEGIN
    SELECT count(*)
    FROM Examination
    WHERE(
             SELECT id, doctor_ssn
             FROM Shift
             WHERE fromtime > FROM_TIME
               AND totime < TO_TIME
               AND _date = shiftdate
               AND patient_ssn in (SELECT issn FROM InPatient)
         ) is not null
    group by medical_examination_id;
end;
-- Comment
CREATE PROCEDURE countOutPatientByShiftAndDateInAllDepartment(IN FROM_TIME TIME, IN TO_TIME time, IN _date DATE)
BEGIN
    SELECT count(*)
    FROM Examination
    WHERE(
             SELECT id, doctor_ssn
             FROM Shift
             WHERE fromtime > FROM_TIME
               AND totime < TO_TIME
               AND _date = shiftdate
               AND patient_ssn in (SELECT ossn FROM OutPatient)
         ) is not null
    group by medical_examination_id;
end;
-- Comment
CREATE PROCEDURE countTestByDateInDepartment(IN dname varchar(100), IN _date DATE)
BEGIN
    SELECT count(*)
    FROM TestResult
    WHERE medicalExamination_id in (SELECT *
                                    FROM Examination ME
                                             inner join Shift SH on ME.shift_id   = SH.id
                                    WHERE dname = (SELECT departmentName FROM  Doctor WHERE SH.doctor_ssn = dssn)
                                      AND SH.shiftdate = _date
    );
end;
-- Comment
CREATE PROCEDURE countTestByDateInAllDepartment(IN _date DATE)
BEGIN
    SELECT count(*)
    FROM TestResult
    WHERE medicalExamination_id in (SELECT *
                                    FROM Examination ME
                                             inner join Shift SH on ME.shift_id = SH.id
                                    WHERE SH.shiftdate = _date
    );
end;
-- Comment
create procedure listAllExamPatientByDoctorAndDate(in doctorSsn char(9), in _date DATE)
BEGIN
    select *
    from Patient
    where ssn in (
        select patient_ssn
        from Examination
        where shift_id in (select id
                           from Shift
                           where _date = shiftdate
                             and doctorSsn = doctor_ssn
        )
    );
end;
-- Comment
create procedure listAllMedicationOfInpatient(in doctorSsn char(9), in patientSsn char(9))
BEGIN
    select medicine_name
    from PrescriptionHaveMedicine med
             inner join Prescription P on med.prescription_id = P.pid
             inner join Examination ME on P.medicalExamination_id = ME.medical_examination_id
    where ME.patient_ssn = patientSsn
      and doctorSsn = (select doctor_ssn from Shift where shift_id = ME.shift_id);
end;

create procedure listAllDiagnose(in doctorSsn char(9), in patientSsn char(9))
BEGIN
    select diag_name
    from MedicalExamination
    where mid in (
        select medical_examination_id
        from Examination
        where shift_id in (
            select id
            from Shift
            where doctor_ssn = doctorSsn
        )
          and patient_ssn = patientSsn
    );
end;
-- Comment
create procedure listAllAssignTest(in doctorSsn char(9), in patientSsn char(9))
BEGIN
    select *
    from TestResult
             inner join Examination on medical_examination_id = medicalExamination_id
    where doctor_assign_ssn = doctorSsn
      and patient_ssn = patientSsn;
end;
-- Comment
create procedure listAllAssignFilm(in doctorSsn char(9), in patientSsn char(9))
BEGIN
    select *
    from FilmResult
             inner join Examination on medical_examination_id = medicalExamination_id
    where doctor_assign_ssn = doctorSsn
      and patient_ssn = patientSsn;
end;
-- Comment
create procedure listAllPatientWithSameIllness(in doctorSsn char(9), in illName varchar(255))
BEGIN
    select *
    from Patient
             inner join InPatientMedicalRecord rec on ssn = inpatient_ssn
             inner join InpatientMedicalRecordHaveIllness recI on rec.id = recI.id
    where illness_name = illName
      and (doctorSsn, inpatient_ssn) in (select doctor_ssn, patient_ssn
                                         from Shift
                                                  left join Examination E on Shift.id = E.shift_id
                                         where doctor_ssn = doctorSsn);
end;
-- Comment
create procedure listAllPatientWithSameIllnessWithCaution(in doctorSsn char(9), in illName varchar(255))
BEGIN
    select *
    from Patient
             inner join InPatientMedicalRecord rec on ssn = inpatient_ssn
             inner join InpatientMedicalRecordHaveIllness recI on rec.id = recI.id
    where illness_name = illName
      and note like '%caution%'
      and (doctorSsn, inpatient_ssn) in (select doctor_ssn, patient_ssn
                                         from Shift
                                                  left join Examination E on Shift.id = E.shift_id
                                         where doctor_ssn = doctorSsn);
end;
-- Comment
create procedure listAllPatientOut(in doctorSsn char(9))
BEGIN
    select *
    from InPatient
    where outdoctorssn = doctorSsn;
end;
-- Comment  UPDATE BHYT
DELIMITER $$

DROP PROCEDURE IF EXISTS add_insurance $$
CREATE Procedure  add_insurance (in new_insurance int, in input_ssn varchar(9))
BEGIN
    IF EXISTS (SELECT * FROM Patient where ssn = input_ssn)
    THEN
        UPDATE Patient
        SET insurance_id = new_insurance
        WHERE ssn = input_ssn;
    ELSE SELECT 'There is no this patient in hospital';
    end IF;
END$$
DELIMITER ;

#Thêm thông tin nhân khẩu
DELIMITER $$
DROP PROCEDURE IF EXISTS Update_patient_info $$
CREATE PROCEDURE UPDATE_PATIENT_INFO (
    in _ssn VARCHAR(9),
    in i_id VARCHAR(225)
)
begin
    IF EXISTS (SELECT * FROM Patient WHERE SSN = _ssn) then
        UPDATE Patient
        SET Patient_name = Patient_name,
            insurance_id = i_id
        WHERE SSN = _ssn;

    ELSE
        SELECT 'There is no patient with this ssn in hospital';
    END IF;
END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS nearest_medicine $$
CREATE PROCEDURE NEAREST_MEDICINE
(in SSN VARCHAR(9))
begin
    declare prescription_ssn int;
    SET PRESCRIPTION_SSN = (SELECT pid
                            FROM Prescription
                            WHERE medicalExamination_id = (SELECT medical_examination_id
                                                            FROM Examination
                                                            WHERE patient_ssn = @SSN));
    SELECT medicine_name FROM PrescriptionHaveMedicine
    WHERE prescription_id = @PRESCRIPTION_SSN;
end$$
DELIMITER ;
-- Comment
create procedure findAllMedicineUsed(in patientSsn char(9))
begin
    select mname
    from Prescription
             inner join PrescriptionHaveMedicine on Prescription.pid = PrescriptionHaveMedicine.prescription_id
             inner join Medicine on PrescriptionHaveMedicine.medicine_name = Medicine.mname
    where medicalExamination_id in (select medical_examination_id from Examination where patient_ssn = patientSsn);
end;
-- Comment
create procedure listAllTestResultInLastExamination(in patientSsn char(9))
BEGIN
    select *
    from TestResult
    where medicalExamination_id = (select medical_examination_id
                                   from Examination
                                   where patient_ssn = patientSsn
                                   order by patient_ssn desc
                                   limit 1);
end;
-- Comment
create procedure listAllTestResultInAllTime(in patientSsn char(9))
BEGIN
    select *
    from TestResult
    where medicalExamination_id = (select medical_examination_id from Examination where patient_ssn = patientSsn);
end;
-- Comment
create procedure listAllTestResultInAllTimeWithCaution(in patientSsn char(9))
BEGIN
    select *
    from TestResult
    where medicalExamination_id = (select medical_examination_id from Examination where patient_ssn = patientSsn)
      and note like '%caution%';
end;
-- Comment
create procedure listAllDoctorInLastExamination(in patientSsn char(9))
BEGIN
    select ename
    from Doctor
             inner join Employee E on Doctor.dssn = E.ssn
    where dssn = (select doctor_ssn
                   from Examination ex
                            inner join Shift S on ex.shift_id = S.id
                   where patient_ssn = patientSsn order by ex.medical_examination_id desc limit  1);
end;


-- CREATE REAL USERS ( MANGER, DOCTOR, PATIENT)
DROP USER if exists 'TranMinhHienDoctor'@'localhost';
create user 'TranMinhHienDoctor'@'localhost' identified by 'minhhien';
DROP USER if exists 'TienTranPatient'@'localhost';
create user 'TienTranPatient'@'localhost' identified by 'tientran';
DROP USER if exists 'DangPhucManager'@'localhost';
create user 'DangPhucManager'@'localhost' identified by 'dangphuc';

-- END CREATE REAL USERS


-- GRANTING PRIVILEGES
-- 'DangPhucManager'@'localhost'
grant select on Department to 'DangPhucManager'@'localhost';
grant select on Doctor to 'DangPhucManager'@'localhost';
grant select on doctorInDepartment to 'DangPhucManager'@'localhost';
grant select on Employee to 'DangPhucManager'@'localhost';
grant select on Examination to 'DangPhucManager'@'localhost';
grant select on InPatient to 'DangPhucManager'@'localhost';
grant select on OutPatient to 'DangPhucManager'@'localhost';
grant select on Shift to 'DangPhucManager'@'localhost';

-- Doctor
grant select on Doctor to 'TranMinhHienDoctor'@'localhost';
grant select on doctorInDepartment to 'TranMinhHienDoctor'@'localhost';
grant select on Nurse to 'TranMinhHienDoctor'@'localhost';
grant select on Employee to 'TranMinhHienDoctor'@'localhost';
grant select on Department to 'TranMinhHienDoctor'@'localhost';
grant select on doctorInDepartment to 'TranMinhHienDoctor'@'localhost';


grant select, insert, update, delete on InPatient to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on OutPatient to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Patient to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Diagnose to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Illness to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on FilmResult to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on TestResult to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Test to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Prescription to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on InPatientMedicalRecord to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Conclusion to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Medicine to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on Examination to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on MedicalExamination to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on InpatienInDepartment to 'TranMinhHienDoctor'@'localhost';
grant select, insert, update, delete on InpatientMedicalRecordHaveIllness to 'TranMinhHienDoctor'@'localhost';

-- Patient

grant select,insert,update,delete on Patient to 'TienTranPatient'@'localhost';

grant select on InPatient to 'TienTranPatient'@'localhost';
grant select on OutPatient to 'TienTranPatient'@'localhost';
grant select on Patient to 'TienTranPatient'@'localhost';
grant select on Diagnose to 'TienTranPatient'@'localhost';
grant select on Illness to 'TienTranPatient'@'localhost';
grant select on FilmResult to 'TienTranPatient'@'localhost';
grant select on TestResult to 'TienTranPatient'@'localhost';
grant select on Test to 'TienTranPatient'@'localhost';
grant select on Prescription to 'TienTranPatient'@'localhost';
grant select on InPatientMedicalRecord to 'TienTranPatient'@'localhost';
grant select on Conclusion to 'TienTranPatient'@'localhost';
grant select on Medicine to 'TienTranPatient'@'localhost';
grant select on Examination to 'TienTranPatient'@'localhost';
grant select on MedicalExamination to 'TienTranPatient'@'localhost';
grant select on InpatienInDepartment to 'TienTranPatient'@'localhost';
grant select on InpatientMedicalRecordHaveIllness to 'TienTranPatient'@'localhost';
-- END GRANTING PRIVILEGES


-- GRANTING PROCEDURE
grant execute on procedure SelectDoctorListByShift  to 'DangPhucManager'@'localhost';
grant execute on procedure SelectDoctorListByDate  to 'DangPhucManager'@'localhost';
grant execute on procedure SelectDoctorListByShiftByDateAllDepartment  to 'DangPhucManager'@'localhost';
grant execute on procedure SelectDoctorListByDateInAllDepartment to 'DangPhucManager'@'localhost';
grant execute on procedure countPatientByShiftAndDateInDepartment to 'DangPhucManager'@'localhost';
grant execute on procedure countInPatientByShiftAndDateInDepartment to 'DangPhucManager'@'localhost';
grant execute on procedure countOutPatientByShiftAndDateInDepartment to 'DangPhucManager'@'localhost';
grant execute on procedure countInPatientByShiftAndDateInAllDepartment to 'DangPhucManager'@'localhost';
grant execute on procedure countOutPatientByShiftAndDateInAllDepartment to 'DangPhucManager'@'localhost';
grant execute on procedure countTestByDateInDepartment to 'DangPhucManager'@'localhost';
grant execute on procedure countTestByDateInAllDepartment to 'DangPhucManager'@'localhost';


grant execute on procedure listAllExamPatientByDoctorAndDate  to  'TienTranPatient'@'localhost';
grant execute on procedure listAllExamPatientByDoctorAndDate to 'TienTranPatient'@'localhost';
grant execute on procedure  listAllMedicationOfInpatient to 'TienTranPatient'@'localhost';
grant execute on procedure listAllAssignTest to 'TienTranPatient'@'localhost';
grant execute on procedure  listAllAssignFilm to 'TienTranPatient'@'localhost';
grant execute on procedure listAllPatientWithSameIllness to 'TienTranPatient'@'localhost';
grant execute on procedure listAllPatientWithSameIllnessWithCaution to 'TienTranPatient'@'localhost';
grant execute on procedure  listAllPatientOut to 'TienTranPatient'@'localhost';

grant execute on procedure add_insurance  to 'TranMinhHienDoctor'@'localhost';
grant execute on procedure NEAREST_MEDICINE  to 'TranMinhHienDoctor'@'localhost';
grant execute on procedure findAllMedicineUsed to 'TranMinhHienDoctor'@'localhost';
grant execute on procedure listAllTestResultInLastExamination to 'TranMinhHienDoctor'@'localhost';
grant execute on procedure listAllTestResultInAllTime to 'TranMinhHienDoctor'@'localhost';
grant execute on procedure listAllTestResultInAllTimeWithCaution to 'TranMinhHienDoctor'@'localhost';
grant execute on procedure listAllDoctorInLastExamination to 'TranMinhHienDoctor'@'localhost';
-- END GRANTING PROCEDURE
