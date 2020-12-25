import { EntityRepository, Repository } from 'typeorm'
import { Prescription } from './prescription.entity'

@EntityRepository(Prescription)
export class PrescriptionRepository extends Repository<Prescription> {
  getInactivePrescriptions(): Promise<Prescription[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}