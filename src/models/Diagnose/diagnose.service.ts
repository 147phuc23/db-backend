import { Diagnose } from './diagnose.entity'
import { DiagnoseRepository } from './diagnose.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class DiagnoseService extends BaseService<Diagnose, DiagnoseRepository> {
  constructor(repository: DiagnoseRepository) {
    super(repository)
  }

  findByDiagnosename(diagnosename: string): Promise<Diagnose | null> {
    return this.repository.findOne({ diagnosename: diagnosename })
  }

  getInactiveDiagnoses(): Promise<Diagnose[]> {
    return this.repository.getInactiveDiagnoses()
  }
}