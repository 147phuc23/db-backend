import { EntityRepository, getConnection, Repository } from 'typeorm'
import { InPatient } from './inPatient.entity'

@EntityRepository(InPatient)
export class InPatientRepository extends Repository<InPatient> {
  getAll(): Promise<InPatient[]> {
    return getConnection().query("select * from InPatient ip inner join Patient p on p.ssn=ip.issn ")
  }
  getInactiveInPatients(): Promise<InPatient[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}