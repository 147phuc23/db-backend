import { TestResult } from './testResult.entity'
import { TestResultRepository } from './testResult.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class TestResultService extends BaseService<TestResult, TestResultRepository> {
  constructor(repository: TestResultRepository) {
    super(repository)
  }

  findByTestResultname(testResultname: string): Promise<TestResult | null> {
    return this.repository.findOne({ testResultname: testResultname })
  }

  getInactiveTestResults(): Promise<TestResult[]> {
    return this.repository.getInactiveTestResults()
  }
}