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
  import { Nurse } from './nurse.entity'
  import { NurseService } from './nurse.service'
  import { CreateNurseDto } from './dto/create-nurse.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateNurseDto } from './dto/update-nurse.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('nurses')
  export class NurseController {
    constructor(private readonly nurseService: NurseService) {}

    @Get()
    index(): Promise<Nurse[]> {
      return this.nurseService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Nurse> {
      const nurse = await this.nurseService.findById(id)
      if (!nurse) {
        throw new NotFoundException()
      }
  
      return nurse
    }
  
    @Post()
    async create(@Body() nurseData: CreateNurseDto): Promise<Nurse> {
      const createdNurse = await this.nurseService.store(nurseData)
  
      return plainToClass(Nurse, createdNurse)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() nurseData: UpdateNurseDto): Promise<Nurse> {
      return this.nurseService.update(id, nurseData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.nurseService.delete(id)
    }
  }