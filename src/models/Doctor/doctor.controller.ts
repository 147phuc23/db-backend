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
  Query,
  UseInterceptors,
} from '@nestjs/common'
import { Doctor } from './doctor.entity'
import { DoctorService } from './doctor.service'
import { CreateDoctorDto } from './dto/create-doctor.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateDoctorDto } from './dto/update-doctor.dto'
import { DeleteResult } from 'typeorm'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) { }


  @Get()
  findByDN(@Query("departmentName") departmentName: string): Promise<Doctor[]> {
    if (departmentName) {
      return this.doctorService.findByDN(departmentName);
    }
    else
      return this.doctorService.getAll();
  }

  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Doctor> {
    const doctor = await this.doctorService.findById(id)
    if (!doctor) {
      throw new NotFoundException()
    }

    return doctor
  }

  @Post()
  async create(@Body() doctorData: CreateDoctorDto): Promise<Doctor> {
    const createdDoctor = await this.doctorService.store(doctorData)

    return plainToClass(Doctor, createdDoctor)
  }

  @Put('/:id')
  update(@Param('id') id: EntityId, @Body() doctorData: UpdateDoctorDto): Promise<Doctor> {
    return this.doctorService.update(id, doctorData)
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.doctorService.delete(id)
  }
}