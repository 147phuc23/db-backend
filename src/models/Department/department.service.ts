import { Department } from './department.entity'
import { DepartmentRepository } from './department.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class DepartmentService extends BaseService<Department, DepartmentRepository> {
  constructor(repository: DepartmentRepository) {
    super(repository)
  }

  findByDepartmentname(departmentname: string): Promise<Department | null> {
    return this.repository.findOne({ departmentname: departmentname })
  }

  getInactiveDepartments(): Promise<Department[]> {
    return this.repository.getInactiveDepartments()
  }
}