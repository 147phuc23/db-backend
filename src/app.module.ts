import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyLogger } from './models/base/logger.custom';
import { ConclusionModule } from './models/Conclusion/conclusion-http.module';
import { DepartmentModule } from './models/Department/department-http.module';
import { Conclusion } from './models/Conclusion/conclusion.entity';
import { Department } from './models/Department/department.entity';
import { Diagnose } from './models/Diagnose/diagnose.entity';
import { Doctor } from './models/Doctor/doctor.entity';
import { Employee } from './models/Employee/employee.entity';
import { Examination } from './models/Examination/examination.entity';
import { Illness } from './models/Illness/illness.entity';
import { InPatient } from './models/InPatient/inPatient.entity';
import { Insurance } from './models/Insurance/insurance.entity';
import { Manager } from './models/Manager/manager.entity';
import { Medicine } from './models/Medicine/medicine.entity';
import { Nurse } from './models/Nurse/nurse.entity';
import { Nutrition } from './models/Nutrition/nutrition.entity';
import { Patient } from './models/Patient/patient.entity';
import { Prescription } from './models/Prescription/prescription.entity';
import { Shift } from './models/Shift/shift.entity';
import { TestResult } from './models/TestResult/testResult.entity';
import { DiagnoseModule } from './models/Diagnose/diagnose-http.module';
import { DoctorModule } from './models/Doctor/doctor-http.module';
import { EmployeeModule } from './models/Employee/employee-http.module';
import { ExaminationModule } from './models/Examination/examination-http.module';
import { IllnessModule } from './models/Illness/illness-http.module';
import { InPatientModule } from './models/InPatient/inPatient-http.module';
import { InsuranceModule } from './models/Insurance/insurance-http.module';
import { ManagerModule } from './models/Manager/manager-http.module';
import { NurseModule } from './models/Nurse/nurse-http.module';
import { MedicineModule } from './models/Medicine/medicine-http.module';
import { NutritionModule } from './models/Nutrition/nutrition-http.module';
import { PatientModule } from './models/Patient/patient-http.module';
import { PrescriptionModule } from './models/Prescription/prescription-http.module';
import { ShiftModule } from './models/Shift/shift-http.module';
import { TestModule } from './models/_Test/test-http.module';
import { TestResultModule } from './models/TestResult/testResult-http.module';
import { Test } from './models/_Test/test.entity';
import { OutPatient } from './models/OutPatient/outPatient.entity';
import { OutPatientModule } from './models/OutPatient/outPatient-http.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3307,
    username: 'root',
    password: '123456',
    database: 'hospital',
    entities: [
      Conclusion,
      Department,
      Diagnose,
      Doctor,
      Employee,
      Examination,
      Illness,
      InPatient,
      Insurance,
      Manager,
      Medicine,
      Nurse,
      Nutrition,
      Patient,
      Prescription,
      Shift,
      Test,
      TestResult,
      OutPatient
    ],
  }),
    ConclusionModule,
    DepartmentModule,
    DiagnoseModule,
    DoctorModule,
    EmployeeModule,
    ExaminationModule,
    IllnessModule,
    InPatientModule,
    InsuranceModule,
    ManagerModule,
    MedicineModule,
    NurseModule,
    NutritionModule,
    PatientModule,
    PrescriptionModule,
    ShiftModule,
    TestModule,
    TestResultModule,
    OutPatientModule
  ],
  controllers: [AppController],
  providers: [AppService, MyLogger],
})
export class AppModule { }


