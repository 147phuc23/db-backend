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
  import { Prescription } from './prescription.entity'
  import { PrescriptionService } from './prescription.service'
  import { CreatePrescriptionDto } from './dto/create-prescription.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdatePrescriptionDto } from './dto/update-prescription.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('prescriptions')
  export class PrescriptionController {
    constructor(private readonly prescriptionService: PrescriptionService) {}

    @Get()
    index(): Promise<Prescription[]> {
      return this.prescriptionService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Prescription> {
      const prescription = await this.prescriptionService.findById(id)
      if (!prescription) {
        throw new NotFoundException()
      }
  
      return prescription
    }
  
    @Post()
    async create(@Body() prescriptionData: CreatePrescriptionDto): Promise<Prescription> {
      const createdPrescription = await this.prescriptionService.store(prescriptionData)
  
      return plainToClass(Prescription, createdPrescription)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() prescriptionData: UpdatePrescriptionDto): Promise<Prescription> {
      return this.prescriptionService.update(id, prescriptionData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.prescriptionService.delete(id)
    }
  }