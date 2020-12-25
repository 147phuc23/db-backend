import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NutritionController } from './nutrition.controller'
import { NutritionRepository } from './nutrition.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NutritionRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [NutritionController]
})
export class NutritionModule {
}