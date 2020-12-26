import { OutPatient } from './outPatient.entity'
import { OutPatientRepository } from './outPatient.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class OutPatientService extends BaseService<OutPatient, OutPatientRepository> {
  joinIndex(): Promise<OutPatient[]> {
    return this.repository.joinIndex();
  }
  constructor(repository: OutPatientRepository) {
    super(repository)
  }

  findByOutPatientname(outPatientname: string): Promise<OutPatient | null> {
    return this.repository.findOne({  where: {outPatientname: outPatientname }})
  }


}