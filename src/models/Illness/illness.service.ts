import { Illness } from './illness.entity'
import { IllnessRepository } from './illness.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class IllnessService extends BaseService<Illness, IllnessRepository> {
  constructor(repository: IllnessRepository) {
    super(repository)
  }

  findByIllnessname(illnessname: string): Promise<Illness | null> {
    return this.repository.findOne({  where: {illnessname: illnessname }})
  }

  getInactiveIllnesss(): Promise<Illness[]> {
    return this.repository.getInactiveIllnesss()
  }
}