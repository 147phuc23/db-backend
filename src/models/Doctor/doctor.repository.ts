import { EntityRepository, Repository } from 'typeorm'
import { Doctor } from './doctor.entity'

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  getInactiveDoctors(): Promise<Doctor[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}