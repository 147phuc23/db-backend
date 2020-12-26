import { Employee } from './employee.entity'
import { EmployeeRepository } from './employee.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class EmployeeService extends BaseService<Employee, EmployeeRepository> {
  constructor(repository: EmployeeRepository) {
    super(repository)
  }

  findByEmployeename(employeename: string): Promise<Employee | null> {
    return this.repository.findOne({  where: {employeename: employeename }})
  }

  getInactiveEmployees(): Promise<Employee[]> {
    return this.repository.getInactiveEmployees()
  }
}