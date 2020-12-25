import { Nutrition } from './nutrition.entity'
import { NutritionRepository } from './nutrition.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class NutritionService extends BaseService<Nutrition, NutritionRepository> {
  constructor(repository: NutritionRepository) {
    super(repository)
  }

  findByNutritionname(nutritionname: string): Promise<Nutrition | null> {
    return this.repository.findOne({ nutritionname: nutritionname })
  }

  getInactiveNutritions(): Promise<Nutrition[]> {
    return this.repository.getInactiveNutritions()
  }
}