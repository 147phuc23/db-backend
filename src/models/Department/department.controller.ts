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
  import { Department } from './department.entity'
  import { DepartmentService } from './department.service'
  import { CreateDepartmentDto } from './dto/create-department.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateDepartmentDto } from './dto/update-department.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('departments')
  export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    @Get()
    index(): Promise<Department[]> {
      return this.departmentService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Department> {
      const department = await this.departmentService.findById(id)
      if (!department) {
        throw new NotFoundException()
      }
  
      return department
    }
  
    @Post()
    async create(@Body() departmentData: CreateDepartmentDto): Promise<Department> {
      const createdDepartment = await this.departmentService.store(departmentData)
  
      return plainToClass(Department, createdDepartment)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() departmentData: UpdateDepartmentDto): Promise<Department> {
      return this.departmentService.update(id, departmentData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.departmentService.delete(id)
    }
  }