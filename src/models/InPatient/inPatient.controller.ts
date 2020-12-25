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
  import { InPatient } from './inPatient.entity'
  import { InPatientService } from './inPatient.service'
  import { CreateInPatientDto } from './dto/create-inPatient.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateInPatientDto } from './dto/update-inPatient.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('inPatients')
  export class InPatientController {
    constructor(private readonly inPatientService: InPatientService) {}

    @Get()
    index(): Promise<InPatient[]> {
      return this.inPatientService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<InPatient> {
      const inPatient = await this.inPatientService.findById(id)
      if (!inPatient) {
        throw new NotFoundException()
      }
  
      return inPatient
    }
  
    @Post()
    async create(@Body() inPatientData: CreateInPatientDto): Promise<InPatient> {
      const createdInPatient = await this.inPatientService.store(inPatientData)
  
      return plainToClass(InPatient, createdInPatient)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() inPatientData: UpdateInPatientDto): Promise<InPatient> {
      return this.inPatientService.update(id, inPatientData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.inPatientService.delete(id)
    }
  }