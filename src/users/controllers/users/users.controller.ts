import { Body, Controller, Get, Param, ParseIntPipe, Patch} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    async getUsers() {
        const users = await this.userService.findUsers()
        return users
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number,) {
        const user = await this.userService.findUserById(id)
        return user
    }

    @Patch(':id')
    async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto,
        ) {
        await this.userService.updateUser(id, updateUserDto)
    }

}
