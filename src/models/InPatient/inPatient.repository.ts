import { EntityRepository, Repository } from 'typeorm'
import { InPatient } from './inPatient.entity'

@EntityRepository(InPatient)
export class InPatientRepository extends Repository<InPatient> {
  getInactiveInPatients(): Promise<InPatient[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}