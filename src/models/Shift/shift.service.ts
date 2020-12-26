import { Shift } from './shift.entity'
import { ShiftRepository } from './shift.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class ShiftService extends BaseService<Shift, ShiftRepository> {
  constructor(repository: ShiftRepository) {
    super(repository)
  }
  
}