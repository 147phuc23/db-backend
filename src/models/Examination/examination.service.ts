import { Examination } from './examination.entity'
import { ExaminationRepository } from './examination.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class ExaminationService extends BaseService<Examination, ExaminationRepository> {
  constructor(repository: ExaminationRepository) {
    super(repository)
  }

  findByExaminationname(examinationname: string): Promise<Examination | null> {
    return this.repository.findOne({ examinationname: examinationname })
  }

  getInactiveExaminations(): Promise<Examination[]> {
    return this.repository.getInactiveExaminations()
  }
}