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
  import { Illness } from './illness.entity'
  import { IllnessService } from './illness.service'
  import { CreateIllnessDto } from './dto/create-illness.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateIllnessDto } from './dto/update-illness.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('illnesss')
  export class IllnessController {
    constructor(private readonly illnessService: IllnessService) {}

    @Get()
    index(): Promise<Illness[]> {
      return this.illnessService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Illness> {
      const illness = await this.illnessService.findById(id)
      if (!illness) {
        throw new NotFoundException()
      }
  
      return illness
    }
  
    @Post()
    async create(@Body() illnessData: CreateIllnessDto): Promise<Illness> {
      const createdIllness = await this.illnessService.store(illnessData)
  
      return plainToClass(Illness, createdIllness)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() illnessData: UpdateIllnessDto): Promise<Illness> {
      return this.illnessService.update(id, illnessData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.illnessService.delete(id)
    }
  }