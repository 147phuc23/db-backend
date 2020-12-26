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
  import { User } from './user.entity'
  import { UserService } from './user.service'
  import { CreateUserDto } from './dto/create-user.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateUserDto } from './dto/update-user.dto'
  import { DeleteResult } from 'typeorm/index'
  import { CreatePatientDto } from './dto/create-patient.dto'  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    index(): Promise<User[]> {
      return this.userService.index()
    }
  
  
    @Get('/:id')
    async show(@Param('id') id: EntityId): Promise<User> {
      const user = await this.userService.findById(id)
      if (!user) {
        throw new NotFoundException()
      }
  
      return user
    }
  
    @Post()
    async create(@Body() userData: CreateUserDto): Promise<User> {
      const createdUser = await this.userService.store(userData)
  
      return plainToClass(User, createdUser)
    }
    @Post('/patient')
    async createPatient(@Body() userData: CreatePatientDto): Promise<User> {
      const createdUser = await this.userService.createPatient(userData)
  
      return plainToClass(User, createdUser)
    }
  
    @Post('/login')
    async login(@Body() user: User) {
      const res = await this.userService.findByUsername(user.username)
      // console.log('a', res[0])
      const emCheck = await this.userService.isEmployee(res[0].id)
      // console.log('b',emCheck[0])
      const paCheck = await this.userService.isPatient(res[0].id)
      // console.log('c', )
      if (Object.keys(emCheck).length) {
        var role: String = 'employee'
        var ssn: String = emCheck[0].ssn
      }
      if (Object.keys(paCheck).length) {
        var role: String = 'patient'
        var ssn: String = paCheck[0].ssn
      }
      if (res[0].password == user.password) {
        var isOk: Boolean = true
      } else{
        var isOk: Boolean = false
      }
      return {
        isOk: isOk,
        role: role,
        ssn: ssn
      }
    }

    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() userData: UpdateUserDto): Promise<User> {
      return this.userService.update(id, userData)
    }
  
    @Delete('/:id')
    destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
      return this.userService.delete(id)
    }
  }