import { EntityRepository, Repository } from 'typeorm'
import { Manager } from './manager.entity'

@EntityRepository(Manager)
export class ManagerRepository extends Repository<Manager> {
  getInactiveManagers(): Promise<Manager[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}