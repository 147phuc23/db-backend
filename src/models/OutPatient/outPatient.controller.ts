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
import { OutPatient } from './outPatient.entity'
import { CreateOutPatientDto } from './dto/create-outPatient.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateOutPatientDto } from './dto/update-outPatient.dto'
import { DeleteResult } from 'typeorm'
import { OutPatientService } from './outPatient.service'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('outPatients')
export class OutPatientController {
  constructor(private readonly outPatientService: OutPatientService) { }

  @Get()
  index(): Promise<OutPatient[]> {
    return this.outPatientService.joinIndex()
  }


  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<OutPatient> {
    const outPatient = await this.outPatientService.findById(id)
    if (!outPatient) {
      throw new NotFoundException()
    }

    return outPatient
  }

  @Post()
  async create(@Body() outPatientData: CreateOutPatientDto): Promise<OutPatient> {
    const createdOutPatient = await this.outPatientService.store(outPatientData)

    return plainToClass(OutPatient, createdOutPatient)
  }

  @Put('/:id')
  update(@Param('id') id: EntityId, @Body() outPatientData: UpdateOutPatientDto): Promise<OutPatient> {
    return this.outPatientService.update(id, outPatientData)
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.outPatientService.delete(id)
  }
}