import { Nurse } from './nurse.entity'
import { NurseRepository } from './nurse.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class NurseService extends BaseService<Nurse, NurseRepository> {
  constructor(repository: NurseRepository) {
    super(repository)
  }

  findByNursename(nursename: string): Promise<Nurse | null> {
    return this.repository.findOne({ where: { nursename: nursename } })
  }

  getInactiveNurses(): Promise<Nurse[]> {
    return this.repository.getInactiveNurses()
  }
}