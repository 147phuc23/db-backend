import { EntityRepository, Repository } from 'typeorm'
import { Shift } from './shift.entity'

@EntityRepository(Shift)
export class ShiftRepository extends Repository<Shift> {
  getInactiveShifts(): Promise<Shift[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}