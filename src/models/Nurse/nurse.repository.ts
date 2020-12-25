import { EntityRepository, Repository } from 'typeorm'
import { Nurse } from './nurse.entity'

@EntityRepository(Nurse)
export class NurseRepository extends Repository<Nurse> {
  getInactiveNurses(): Promise<Nurse[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}