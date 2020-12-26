import { Prescription } from './prescription.entity'
import { PrescriptionRepository } from './prescription.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class PrescriptionService extends BaseService<Prescription, PrescriptionRepository> {
  constructor(repository: PrescriptionRepository) {
    super(repository)
  }

  findByPrescriptionname(prescriptionname: string): Promise<Prescription | null> {
    return this.repository.findOne({ where :{prescriptionname: prescriptionname }})
  }

  getInactivePrescriptions(): Promise<Prescription[]> {
    return this.repository.getInactivePrescriptions()
  }
}