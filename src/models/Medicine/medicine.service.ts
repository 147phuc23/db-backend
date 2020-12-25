import { Medicine } from './medicine.entity'
import { MedicineRepository } from './medicine.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class MedicineService extends BaseService<Medicine, MedicineRepository> {
  constructor(repository: MedicineRepository) {
    super(repository)
  }

  findByMedicinename(medicinename: string): Promise<Medicine | null> {
    return this.repository.findOne({ medicinename: medicinename })
  }

  getInactiveMedicines(): Promise<Medicine[]> {
    return this.repository.getInactiveMedicines()
  }
}