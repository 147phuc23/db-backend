import { EntityRepository, Repository } from 'typeorm'
import { Department } from './department.entity'

@EntityRepository(Department)
export class DepartmentRepository extends Repository<Department> {
  getInactiveDepartments(): Promise<Department[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}