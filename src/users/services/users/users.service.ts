import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    

    constructor (
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}


    findUsers() {
        return this.userRepository.find()
    }

    findUserById(id: number) {
        return this.userRepository.findOne({where: {id}})
    }
    

    updateUser(id: number, updateUserDetails: UpdateUserDto) {
        return this.userRepository.update({ id }, { ...updateUserDetails })
    }

}
