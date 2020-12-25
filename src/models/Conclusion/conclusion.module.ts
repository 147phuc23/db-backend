import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConclusionController } from './conclusion.controller'
import { ConclusionRepository } from './conclusion.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConclusionRepository,
    ]),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
  ],
  controllers: [ConclusionController]
})
export class ConclusionModule {
}