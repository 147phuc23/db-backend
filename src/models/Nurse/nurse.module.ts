import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NurseController } from './nurse.controller'
import { NurseRepository } from './nurse.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NurseRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [NurseController]
})
export class NurseModule {
}