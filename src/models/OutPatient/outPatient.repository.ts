import { EntityRepository, getConnection, getManager, Repository } from 'typeorm'
import { OutPatient } from './outPatient.entity'

@EntityRepository(OutPatient)
export class OutPatientRepository extends Repository<OutPatient> {
  
  async joinIndex(): Promise<OutPatient[]> {
    return getConnection().query("select * from OutPatient op inner join Patient p on op.ossn = p.ssn");
  }
}