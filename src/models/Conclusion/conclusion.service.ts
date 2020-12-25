import { Conclusion } from './conclusion.entity'
import { ConclusionRepository } from './conclusion.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class ConclusionService extends BaseService<Conclusion, ConclusionRepository> {
  constructor(repository: ConclusionRepository) {
    super(repository)
  }

  findByConclusionname(conclusionname: string): Promise<Conclusion | null> {
    return this.repository.findOne({ conclusionname: conclusionname })
  }

  getInactiveConclusions(): Promise<Conclusion[]> {
    return this.repository.getInactiveConclusions()
  }
}