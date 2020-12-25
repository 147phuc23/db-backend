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
  import { Patient } from './patient.entity'
  import { PatientService } from './patient.service'
  import { CreatePatientDto } from './dto/create-patient.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdatePatientDto } from './dto/update-patient.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('patients')
  export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Get()
    index(): Promise<Patient[]> {
      return this.patientService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Patient> {
      const patient = await this.patientService.findById(id)
      if (!patient) {
        throw new NotFoundException()
      }
  
      return patient
    }
  
    @Post()
    async create(@Body() patientData: CreatePatientDto): Promise<Patient> {
      const createdPatient = await this.patientService.store(patientData)
  
      return plainToClass(Patient, createdPatient)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() patientData: UpdatePatientDto): Promise<Patient> {
      return this.patientService.update(id, patientData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.patientService.delete(id)
    }
  }