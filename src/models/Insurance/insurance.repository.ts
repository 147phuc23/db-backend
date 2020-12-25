import { EntityRepository, Repository } from 'typeorm'
import { Insurance } from './insurance.entity'

@EntityRepository(Insurance)
export class InsuranceRepository extends Repository<Insurance> {
  getInactiveInsurances(): Promise<Insurance[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}