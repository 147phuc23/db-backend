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
  import { Manager } from './manager.entity'
  import { ManagerService } from './manager.service'
  import { CreateManagerDto } from './dto/create-manager.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateManagerDto } from './dto/update-manager.dto'
  import { DeleteResult } from 'typeorm'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('managers')
  export class ManagerController {
    constructor(private readonly managerService: ManagerService) {}

    @Get()
    index(): Promise<Manager[]> {
      return this.managerService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<Manager> {
      const manager = await this.managerService.findById(id)
      if (!manager) {
        throw new NotFoundException()
      }
  
      return manager
    }
  
    @Post()
    async create(@Body() managerData: CreateManagerDto): Promise<Manager> {
      const createdManager = await this.managerService.store(managerData)
  
      return plainToClass(Manager, createdManager)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() managerData: UpdateManagerDto): Promise<Manager> {
      return this.managerService.update(id, managerData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.managerService.delete(id)
    }
  }