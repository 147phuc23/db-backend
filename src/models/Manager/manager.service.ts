import { Manager } from './manager.entity'
import { ManagerRepository } from './manager.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { LoggerService } from '@nestjs/common'

@Injectable()
export class ManagerService extends BaseService<Manager, ManagerRepository> {
  constructor(repository: ManagerRepository) {
    super(repository)
  }

  findByManagername(managername: string): Promise<Manager | null> {
    return this.repository.findOne({ managername: managername })
  }

  getInactiveManagers(): Promise<Manager[]> {
    return this.repository.getInactiveManagers()
  }
}