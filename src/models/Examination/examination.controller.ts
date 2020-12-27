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
import { Examination } from './examination.entity'
import { ExaminationService } from './examination.service'
import { CreateExaminationDto } from './dto/create-examination.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateExaminationDto } from './dto/update-examination.dto'
import { DeleteResult, getConnection } from 'typeorm'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('examinations')
export class ExaminationController {
  constructor(private readonly examinationService: ExaminationService) { }

  @Get()
  index(): Promise<Examination[]> {
    return this.examinationService.index()
  }


  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Examination> {
    const examination = await this.examinationService.findById(id)
    if (!examination) {
      throw new NotFoundException()
    }

    return examination
  }

  @Post()
  async create(@Body() examinationData: CreateExaminationDto): Promise<Examination> {
    const createdExamination = await this.examinationService.store(examinationData)

    return plainToClass(Examination, createdExamination)
  }

  @Put('/:id')
  update(@Param('id') id: EntityId, @Body() examinationData: UpdateExaminationDto): Promise<Examination> {
    return this.examinationService.update(id, examinationData)
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.examinationService.delete(id)
  }

  @Put("/shift/")
  updateSchedule(@Body() dto: UpdateScheduleDTO) {
    return getConnection().query(`update Examination set fromtime='${dto.fromtime}' , totime='${dto.totime}', shift_id=${dto.shift_id}, patient_ssn='${dto.patient_ssn}' where medical_examination_id=${dto.medical_examination_id}`)
  }
}

type UpdateScheduleDTO = {
  fromtime: string
  totime: string
  shift_id: number
  patient_ssn: string
  medical_examination_id: number
}
