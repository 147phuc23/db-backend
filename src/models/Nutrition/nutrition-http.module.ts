import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NutritionController } from './nutrition.controller'
import { NutritionRepository } from './nutrition.repository'
import { NutritionService } from './nutrition.service'
import {LoggerService} from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            NutritionRepository,
        ]),
    ],
    providers: [ NutritionService],
    exports: [
        TypeOrmModule,
    ],
    controllers:[NutritionController],
    
})
export class NutritionModule {
}