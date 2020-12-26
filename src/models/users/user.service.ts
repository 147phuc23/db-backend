import { User } from './user.entity'
import { UserRepository } from './user.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'
import { DoctorService } from '../Doctor/doctor.service'
import { PatientService } from '../Patient/patient.service'
import { Patient } from '../Patient/patient.entity'

@Injectable()
export class UserService extends BaseService<User, UserRepository> {

  private readonly doctorService: DoctorService
  private readonly patientService: PatientService
  constructor(repository: UserRepository, doctorService: DoctorService, patientService: PatientService) {
    super(repository)
    this.doctorService = doctorService;
    this.patientService = patientService
  }

  createPatient(patient: Patient): void {
    this.patientService.store(patient);
  }

  findByUsername(username: string): Promise<User | null> {
    return this.repository.findOne({ username: username })
  }

  getInactiveUsers(): Promise<User[]> {
    return this.repository.getInactiveUsers()
  }
}