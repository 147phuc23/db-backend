drop database
    if exists hospital;

create database hospital;
use hospital;
Create table Employee
(
    ssn          char(9) PRIMARY KEY,
    ename        varchar(100),
    bdate        date,
    gender       varchar(10),
    phone_number char(11),
    salary       bigint
);

Create table Manager
(
    mssn char(9) PRIMARY KEY,
    Foreign Key (mssn) references Employee (ssn)
);

Create table Doctor
(
    dssn     char(9) PRIMARY KEY,
    year_exp smallint CHECK (year_exp >3),
    Foreign Key (dssn) references Employee (ssn)
);
Create table Nurse
(
    nssn        char(9) PRIMARY KEY,
    isFoodNurse bool,
    Foreign Key (nssn) references Employee (ssn)
);

Create table Department
(
    dname     varchar(100) PRIMARY KEY,
    depiction varchar(255)
);

Create table Shift
(
    id        int(10) PRIMARY KEY auto_increment,
    location  varchar(255) not null,
    fromtime  time         not null,
    totime    time         not null, 
    shiftdate date,
    UNIQUE (fromtime, totime, shiftdate),
    CONSTRAINT check_time CHECK (totime >= fromtime)
);
Create table Medicine
(
    mname varchar(255) PRIMARY KEY,
    expiry_date   date
);

Create table Nutrition
(
    nutrition_name varchar(255) PRIMARY KEY,
    depiction      varchar(255)
);

Create table Patient
(
    ssn          char(9) PRIMARY KEY,
    Patient_name varchar(255)
);

Create table InPatient
(
    issn     char(9) PRIMARY KEY,
    room     smallint, 
    position varchar(255),
    Foreign Key (issn) references Patient (ssn)
);

Create table OutPatient
(
    ossn                char(9) PRIMARY KEY,
    next_examinate_date date not null,
    Foreign Key (ossn) references Patient (ssn)
);
Create table Illness
(
    illness_name varchar(255) PRIMARY KEY,
    depiction    varchar(255)
);

Create table Diagnose
(
    diag_name varchar(255) PRIMARY KEY
);

Create table Test
(
    test_name varchar(255) PRIMARY KEY,
    min       bigint,
    max       bigint,
    normal    bigint
);

Create table MedicalExamination
(
    mid int(10) PRIMARY KEY
);

Create table Insurance
(
    id          int(10) PRIMARY KEY,
    expiry_date date
);

#2 Weak Entity
Create table Prescription
(
    pid                   int(10) PRIMARY KEY,
    medicalExamination_id int(10) not null,
    tid                   int(10),
    Foreign Key (medicalExamination_id) references MedicalExamination (mid)
);

Create table FilmResult
(
    fid                   int(10) auto_increment,
    medicalExamination_id int(10) not null ,
    result                varchar(255),
    datetaken             date,
    PRIMARY KEY (fid, medicalExamination_id),
    Foreign Key (medicalExamination_id) references MedicalExamination (mid)
);

Create table TestResult
(
    tid                   varchar(255) not null ,
    medicalExamination_id int(10) not null,
    note                  varchar(255),
    result                varchar(255),
    FOREIGN KEY (tid) references Test(test_name),
    Foreign Key (medicalExamination_id) references MedicalExamination (mid),
    PRIMARY KEY (tid, medicalExamination_id)
);

Create table InPatientMedicalRecord
(
    id            int(10) PRIMARY KEY auto_increment,
    inpatient_ssn char(9),
    datetaken     date,
    note          varchar(255),
    instatus      varchar(255) CHECK (instatus IN ('GOOD','BAD','NORMAL')),
    outstatus     varchar(255) CHECK (outstatus IN ('GOOD','BAD','NORMAL')),
    UNIQUE (inpatient_ssn),
    Foreign Key (inpatient_ssn) references InPatient (issn)
);


alter table Manager
    add
        departmentName varchar(255) not null,
    add Foreign Key (departmentName) references Department (dname)
;
alter table Patient
    add
        insurance_id int(10),
    add
        Foreign Key (insurance_id) references Insurance (id)
;
alter table TestResult
    add
        type_name varchar(255),
    add
        Foreign key (type_name) references Test (test_name)
;
alter table InPatient
    add
        indoctorssn  char(9),
    add
        outdoctorssn char(9),
    add
        Foreign Key (indoctorssn) references Doctor (dssn),
    add Foreign Key (outdoctorssn) references Doctor (dssn);


#4 1:N
alter table Doctor
    add departmentName varchar(255) not null,
    add Foreign Key (departmentName) references Department (dname);
alter table Shift
    add nurse_ssn  char(9),
    add doctor_ssn char(9),
    add Foreign Key Shift (nurse_ssn) references Nurse (nssn),
    add FOREIGN KEY (doctor_ssn) references Doctor (dssn)
;

alter table FilmResult
    add doctor_assign_ssn char(9) not null,
    add doctor_do_ssn     char(9),
    add diagnose          varchar(255),
    add Foreign Key (doctor_assign_ssn) references Doctor (dssn),

    add Foreign Key (doctor_do_ssn) references Doctor (dssn),
    add
        Foreign Key (diagnose) references Diagnose (diag_name)
;

alter table TestResult
    add doctor_assign_ssn char(9) not null,
    add
        doctor_take_ssn   char(9) not null,
    add
        Foreign Key (doctor_assign_ssn) references Doctor (dssn),
    add Foreign Key (doctor_take_ssn) references Doctor (dssn);

alter table MedicalExamination
    add
        diag_name varchar(255),
    add
        Foreign Key (diag_name) references Diagnose (diag_name);
create table doctorInDepartment
(
    dname      varchar(255),
    doctor_ssn varchar(9),
    Foreign Key (doctor_ssn) references Doctor (dssn),
    Foreign Key (dname) references Department (dname)
);
#5 N-M 
Create table Conclusion
(
    Illness  varchar(255) PRIMARY KEY,
    diagnose varchar(255),
    Foreign Key (Illness) references Illness (illness_Name),
    Foreign Key (diagnose) references Diagnose (diag_name)
);
Create table PrescriptionHaveMedicine
(
    prescription_id int(10),
    medicine_name   varchar(255),
    timehave        time,
    how_to_use      varchar(255),
    amount          smallint,
    Primary Key (prescription_id, medicine_name),
    Foreign Key (prescription_id) references Prescription (pid),
    Foreign Key (medicine_name) references Medicine (mname)
);
Create table InpatientMedicalRecordHaveIllness
(
    id           int(10),
    illness_name varchar(255),
    Primary Key (id, illness_name),
    Foreign Key (id) references InPatientMedicalRecord (id),
    Foreign Key (Illness_name) references Illness (illness_name)
);
#6 3  entity relation
Create table Examination
(
    medical_examination_id int(10),
    patient_ssn            char(9),
    shift_id               int(10),
    fromtime              time,
    totime                 time,
    Primary key (medical_examination_id, patient_ssn),
    Foreign Key (medical_examination_id) references MedicalExamination (mid),
    Foreign key (patient_ssn) references Patient (ssn),
    Foreign key (shift_id) references Shift (id)
);
Create table InpatienInDepartment
(
    inpatient_ssn     char(9),
    doctor_assign_ssn char(9),
    dname             varchar(255),
    Primary key (inpatient_ssn, doctor_assign_ssn),
    Foreign key (inpatient_ssn) references InPatient (issn),
    Foreign key (dname) references Department (dname),
    Foreign key (doctor_assign_ssn) references Doctor (dssn)
);


Create table HaveNutrition
(
    patient_ssn    char(9),
    nutrition_name varchar(255),
    amount         int,
    Primary key (patient_ssn, nutrition_name),
    Foreign Key (patient_ssn) references Patient (ssn)
);

#Checked