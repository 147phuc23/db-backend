import { InPatient } from './inPatient.entity'
import { InPatientRepository } from './inPatient.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class InPatientService extends BaseService<InPatient, InPatientRepository> {
  constructor(repository: InPatientRepository) {
    super(repository)
  }

  findByInPatientname(inPatientname: string): Promise<InPatient | null> {
    return this.repository.findOne({ inPatientname: inPatientname })
  }

  getInactiveInPatients(): Promise<InPatient[]> {
    return this.repository.getInactiveInPatients()
  }
}