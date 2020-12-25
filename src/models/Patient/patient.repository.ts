import { EntityRepository, Repository } from 'typeorm'
import { Patient } from './patient.entity'

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  getInactivePatients(): Promise<Patient[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}