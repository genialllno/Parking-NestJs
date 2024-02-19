import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
// import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

    constructor (
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    findUsers() {
        return this.userRepository.find()
    }
//CreateUserDto or CreateUserParams
    createUser(userDetails: CreateUserDto) {
        const newUser = this.userRepository.create({ ...userDetails })
        return this.userRepository.save(newUser)
    }

    updateUser(id: number, updateUserDetails: UpdateUserDto) {
        return this.userRepository.update({ id }, { ...updateUserDetails })
    }

    deleteUser(id: number) {
        return this.userRepository.delete({ id })
    }

}
