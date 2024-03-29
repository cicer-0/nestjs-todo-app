import { TaskDto } from './task.dto';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from 'src/users/dto/user.dto';

export class TodoDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  createdOn?: Date;
  description?: string;

  owner: UserDto;

  tasks?: TaskDto[];
}
