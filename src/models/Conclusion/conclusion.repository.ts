import { EntityRepository, Repository } from 'typeorm'
import { Conclusion } from './conclusion.entity'

@EntityRepository(Conclusion)
export class ConclusionRepository extends Repository<Conclusion> {
  getInactiveConclusions(): Promise<Conclusion[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}