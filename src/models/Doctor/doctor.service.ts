import { Doctor } from './doctor.entity'
import { DoctorRepository } from './doctor.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'
import { DepartmentRepository } from '../Department/department.repository'
import { DepartmentService } from '../Department/department.service'

@Injectable()
export class DoctorService extends BaseService<Doctor, DoctorRepository> {
  private dr: DepartmentService;
  findByDN(departmentName: string): Promise<Doctor[]> {
     return this.repository.find({  where: {departmentName: departmentName }})
  }
  constructor(repository: DoctorRepository ) {
    super(repository)
  }

  findByDoctorname(doctorname: string): Promise<Doctor | null> {
    return this.repository.findOne({  where: {doctorname: doctorname }})
  }

  getInactiveDoctors(): Promise<Doctor[]> {
    return this.repository.getInactiveDoctors()
  }
}