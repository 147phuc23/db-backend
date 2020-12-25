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
  import { Diagnose } from './diagnose.entity'
  import { DiagnoseService } from './diagnose.service'
  import { CreateDiagnoseDto } from './dto/create-diagnose.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateDiagnoseDto } from './dto/update-diagnose.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('diagnoses')
  export class DiagnoseController {
    constructor(private readonly diagnoseService: DiagnoseService) {}

    @Get()
    index(): Promise<Diagnose[]> {
      return this.diagnoseService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Diagnose> {
      const diagnose = await this.diagnoseService.findById(id)
      if (!diagnose) {
        throw new NotFoundException()
      }
  
      return diagnose
    }
  
    @Post()
    async create(@Body() diagnoseData: CreateDiagnoseDto): Promise<Diagnose> {
      const createdDiagnose = await this.diagnoseService.store(diagnoseData)
  
      return plainToClass(Diagnose, createdDiagnose)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() diagnoseData: UpdateDiagnoseDto): Promise<Diagnose> {
      return this.diagnoseService.update(id, diagnoseData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.diagnoseService.delete(id)
    }
  }