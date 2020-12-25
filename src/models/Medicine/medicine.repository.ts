import { EntityRepository, Repository } from 'typeorm'
import { Medicine } from './medicine.entity'

@EntityRepository(Medicine)
export class MedicineRepository extends Repository<Medicine> {
  getInactiveMedicines(): Promise<Medicine[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}