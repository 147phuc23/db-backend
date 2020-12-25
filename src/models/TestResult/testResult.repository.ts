import { EntityRepository, Repository } from 'typeorm'
import { TestResult } from './testResult.entity'

@EntityRepository(TestResult)
export class TestResultRepository extends Repository<TestResult> {
  getInactiveTestResults(): Promise<TestResult[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}