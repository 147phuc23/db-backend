import { Insurance } from './insurance.entity'
import { InsuranceRepository } from './insurance.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class InsuranceService extends BaseService<Insurance, InsuranceRepository> {
  constructor(repository: InsuranceRepository) {
    super(repository)
  }

  findByInsurancename(insurancename: string): Promise<Insurance | null> {
    return this.repository.findOne({ insurancename: insurancename })
  }

  getInactiveInsurances(): Promise<Insurance[]> {
    return this.repository.getInactiveInsurances()
  }
}