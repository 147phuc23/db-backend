import { EntityRepository, Repository } from 'typeorm'
import { Illness } from './illness.entity'

@EntityRepository(Illness)
export class IllnessRepository extends Repository<Illness> {
  getInactiveIllnesss(): Promise<Illness[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}