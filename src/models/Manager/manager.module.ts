import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ManagerController } from './manager.controller'
import { ManagerRepository } from './manager.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ManagerRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [ManagerController]
})
export class ManagerModule {
}