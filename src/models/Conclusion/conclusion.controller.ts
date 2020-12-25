import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
    UseInterceptors,
  } from '@nestjs/common'
  import { Conclusion as Conclusion } from './conclusion.entity'
  import { ConclusionService } from './conclusion.service'
  import { CreateConclusionDto } from './dto/create-conclusion.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateConclusionDto } from './dto/update-conclusion.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('conclusions')
  export class ConclusionController {
    constructor(private readonly conclusionService: ConclusionService) {}

    @Get()
    index(): Promise<Conclusion[]> {
      return this.conclusionService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Conclusion> {
      const conclusion = await this.conclusionService.findById(id)
      if (!conclusion) {
        throw new NotFoundException()
      }
  
      return conclusion
    }
  
    @Post()
    async create(@Body() conclusionData: CreateConclusionDto): Promise<Conclusion> {
      const createdConclusion = await this.conclusionService.store(conclusionData)
  
      return plainToClass(Conclusion, createdConclusion)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() conclusionData: UpdateConclusionDto): Promise<Conclusion> {
      return this.conclusionService.update(id, conclusionData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.conclusionService.delete(id)
    }
  }