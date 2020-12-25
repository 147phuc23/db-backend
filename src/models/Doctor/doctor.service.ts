import { Doctor } from './doctor.entity'
import { DoctorRepository } from './doctor.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class DoctorService extends BaseService<Doctor, DoctorRepository> {
  constructor(repository: DoctorRepository) {
    super(repository)
  }

  findByDoctorname(doctorname: string): Promise<Doctor | null> {
    return this.repository.findOne({ doctorname: doctorname })
  }

  getInactiveDoctors(): Promise<Doctor[]> {
    return this.repository.getInactiveDoctors()
  }
}