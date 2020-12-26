import { User } from './user.entity'
import { UserRepository } from './user.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'
import { DoctorService } from '../Doctor/doctor.service'
import { PatientService } from '../Patient/patient.service'
import { Patient } from '../Patient/patient.entity'
import { getConnection } from 'typeorm'
import { Employee } from '../Employee/employee.entity'
import { CreatePatientDto } from './dto/create-patient.dto'

@Injectable()
export class UserService extends BaseService<User, UserRepository> {

  constructor(repository: UserRepository) {
    super(repository)
  }

  async createPatient(patient: CreatePatientDto): Promise<any> {
    // this.patientService.store(patient);
    await getConnection().query(`INSERT INTO User (username,password) VALUES ('${patient.username}', '${patient.pasword}');`)
    const user = await this.findByUsername(patient.username)
    console.log(user)
    await getConnection().query(`INSERT INTO Insurance (id) VALUES (${patient.insurance});`)
    await getConnection().query(`INSERT INTO Patient (ssn, Patient_name, insurance_id, user_id) VALUES ('${patient.userSsn}', '${patient.name}', ${patient.insurance},${user[0].id});`)
  }

  findByUsername(username: string): Promise<User | null> {
    // return this.repository.findOne({where: {username: username} })
    return getConnection().query(`select * from User where username = '${username}'`)
  }

  getInactiveUsers(): Promise<User[]> {
    return this.repository.getInactiveUsers()
  }

  isEmployee(uid): Promise<Employee | null>{
    return getConnection().query(`select * from Employee where user_id = ${uid}`)
  }
  isPatient(uid): Promise<Patient | null>{
    return getConnection().query(`select * from Patient where user_id = ${uid}`)
  }
}