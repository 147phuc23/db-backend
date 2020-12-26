-- 'Manager'
grant select on Department to 'Manager';
grant select on Doctor to 'Manager';
grant select on doctorInDepartment to 'Manager';
grant select on Employee to 'Manager';
grant select on Examination to 'Manager';
grant select on InPatient to 'Manager';
grant select on OutPatient to 'Manager';
grant select on Shift to 'Manager';

-- 'Doctor'
grant select on Doctor to 'Doctor';
grant select on doctorInDepartment to 'Doctor';
grant select on Nurse to 'Doctor';
grant select on Employee to 'Doctor';
grant select on Department to 'Doctor';
grant select on doctorInDepartment to 'Doctor';


grant select, insert, update, delete on InPatient to 'Doctor';
grant select, insert, update, delete on OutPatient to 'Doctor';
grant select, insert, update, delete on Patient to 'Doctor';
grant select, insert, update, delete on Diagnose to 'Doctor';
grant select, insert, update, delete on Illness to 'Doctor';
grant select, insert, update, delete on FilmResult to 'Doctor';
grant select, insert, update, delete on TestResult to 'Doctor';
grant select, insert, update, delete on Test to 'Doctor';
grant select, insert, update, delete on Prescription to 'Doctor';
grant select, insert, update, delete on InPatientMedicalRecord to 'Doctor';
grant select, insert, update, delete on Conclusion to 'Doctor';
grant select, insert, update, delete on Medicine to 'Doctor';
grant select, insert, update, delete on Examination to 'Doctor';
grant select, insert, update, delete on MedicalExamination to 'Doctor';
grant select, insert, update, delete on InpatientInDepartment to 'Doctor';
grant select, insert, update, delete on InpatientMedicalRecordHaveIllness to 'Doctor';

-- 'Patient'

grant select,insert,update,delete on 'Patient' to 'Patient';

grant select on InPatient to 'Patient';
grant select on OutPatient to 'Patient';
grant select on  Patient to 'Patient';
grant select on Diagnose to 'Patient';
grant select on Illness to 'Patient';
grant select on FilmResult to 'Patient';
grant select on TestResult to 'Patient';
grant select on Test to 'Patient';
grant select on Prescription to 'Patient';
grant select on InPatientMedicalRecord to 'Patient';
grant select on Conclusion to 'Patient';
grant select on Medicine to 'Patient';
grant select on Examination to 'Patient';
grant select on MedicalExamination to 'Patient';
grant select on InpatientInDepartment to 'Patient';
grant select on InpatientMedicalRecordHaveIllness to 'Patient';
grant select on Nurse to 'Patient';


