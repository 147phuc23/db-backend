import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InsuranceController } from './insurance.controller'
import { InsuranceRepository } from './insurance.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InsuranceRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [InsuranceController]
})
export class InsuranceModule {
}