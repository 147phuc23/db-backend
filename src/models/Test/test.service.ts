import { Test } from './test.entity'
import { TestRepository } from './test.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class TestService extends BaseService<Test, TestRepository> {
  constructor(repository: TestRepository) {
    super(repository)
  }

  findByTestname(testname: string): Promise<Test | null> {
    return this.repository.findOne({ testname: testname })
  }

  getInactiveTests(): Promise<Test[]> {
    return this.repository.getInactiveTests()
  }
}