import { EntityRepository, Repository } from 'typeorm'
import { Diagnose } from './diagnose.entity'

@EntityRepository(Diagnose)
export class DiagnoseRepository extends Repository<Diagnose> {
  getInactiveDiagnoses(): Promise<Diagnose[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}