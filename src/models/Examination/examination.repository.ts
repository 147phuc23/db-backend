import { EntityRepository, Repository } from 'typeorm'
import { Examination } from './examination.entity'

@EntityRepository(Examination)
export class ExaminationRepository extends Repository<Examination> {
  getInactiveExaminations(): Promise<Examination[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}