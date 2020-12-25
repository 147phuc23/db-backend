import { EntityRepository, Repository } from 'typeorm'
import { Employee } from './employee.entity'

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  getInactiveEmployees(): Promise<Employee[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}