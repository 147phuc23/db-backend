import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExaminationController } from './examination.controller'
import { ExaminationRepository } from './examination.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ExaminationRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [ExaminationController]
})
export class ExaminationModule {
}