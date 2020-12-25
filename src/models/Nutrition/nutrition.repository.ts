import { EntityRepository, Repository } from 'typeorm'
import { Nutrition } from './nutrition.entity'

@EntityRepository(Nutrition)
export class NutritionRepository extends Repository<Nutrition> {
  getInactiveNutritions(): Promise<Nutrition[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}