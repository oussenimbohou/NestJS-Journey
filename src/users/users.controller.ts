import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //GET  /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() //POST /users
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') //PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
