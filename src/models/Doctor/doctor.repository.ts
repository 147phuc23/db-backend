import { EntityRepository, getConnection, Repository } from 'typeorm'
import { Doctor } from './doctor.entity'

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  getInactiveDoctors(): Promise<Doctor[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }

  async getAll(): Promise<Doctor[]> {
    return getConnection().query("select * from Doctor d inner join Employee e on d.dssn = e.ssn ");
  }
}