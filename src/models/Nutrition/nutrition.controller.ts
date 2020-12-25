import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
    UseInterceptors,
  } from '@nestjs/common'
  import { Nutrition } from './nutrition.entity'
  import { NutritionService } from './nutrition.service'
  import { CreateNutritionDto } from './dto/create-nutrition.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateNutritionDto } from './dto/update-nutrition.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('nutritions')
  export class NutritionController {
    constructor(private readonly nutritionService: NutritionService) {}

    @Get()
    index(): Promise<Nutrition[]> {
      return this.nutritionService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Nutrition> {
      const nutrition = await this.nutritionService.findById(id)
      if (!nutrition) {
        throw new NotFoundException()
      }
  
      return nutrition
    }
  
    @Post()
    async create(@Body() nutritionData: CreateNutritionDto): Promise<Nutrition> {
      const createdNutrition = await this.nutritionService.store(nutritionData)
  
      return plainToClass(Nutrition, createdNutrition)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() nutritionData: UpdateNutritionDto): Promise<Nutrition> {
      return this.nutritionService.update(id, nutritionData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.nutritionService.delete(id)
    }
  }