import { Patient } from './patient.entity'
import { PatientRepository } from './patient.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class PatientService extends BaseService<Patient, PatientRepository> {
  constructor(repository: PatientRepository) {
    super(repository)
  }

  findByPatientname(patientname: string): Promise<Patient | null> {
    return this.repository.findOne({ patientname: patientname })
  }

  getInactivePatients(): Promise<Patient[]> {
    return this.repository.getInactivePatients()
  }
}