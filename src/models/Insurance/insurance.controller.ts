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
  import { Insurance } from './insurance.entity'
  import { InsuranceService } from './insurance.service'
  import { CreateInsuranceDto } from './dto/create-insurance.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateInsuranceDto } from './dto/update-insurance.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('insurances')
  export class InsuranceController {
    constructor(private readonly insuranceService: InsuranceService) {}

    @Get()
    index(): Promise<Insurance[]> {
      return this.insuranceService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Insurance> {
      const insurance = await this.insuranceService.findById(id)
      if (!insurance) {
        throw new NotFoundException()
      }
  
      return insurance
    }
  
    @Post()
    async create(@Body() insuranceData: CreateInsuranceDto): Promise<Insurance> {
      const createdInsurance = await this.insuranceService.store(insuranceData)
  
      return plainToClass(Insurance, createdInsurance)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() insuranceData: UpdateInsuranceDto): Promise<Insurance> {
      return this.insuranceService.update(id, insuranceData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.insuranceService.delete(id)
    }
  }