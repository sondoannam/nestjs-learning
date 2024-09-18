import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /**
   * GET /users
   * GET /users/:id
   * POST /users
   * PATCH /users/:id
   * DELETE /users/:id
   */

  @Get() // GET /users
  findAll(@Query('role') role?: 'admin' | 'user') {
    return [];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return {
      id,
      name: 'John Doe',
      email: 'example@email.com',
    };
  }

  @Post() // POST /users
  create(@Body() user: { name: string; email: string }) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body() user: { name: string; email: string },
  ) {
    return {
      id,
      ...user,
    };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
