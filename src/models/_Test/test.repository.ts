import { EntityRepository, Repository } from 'typeorm'
import { Test } from './test.entity'

@EntityRepository(Test)
export class TestRepository extends Repository<Test> {
  getInactiveTests(): Promise<Test[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}