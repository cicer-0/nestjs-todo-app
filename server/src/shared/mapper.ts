import { TaskDto } from "src/todo/dto/task.dto";
import { TodoDto } from "src/todo/dto/todo.dto";
import { TaskEntity } from "src/todo/entity/task.entity";
import { TodoEntity } from "src/todo/entity/todo.entity";
import { UserDto } from "src/users/dto/user.dto";
import { UserEntity } from "src/users/entity/user.entity";


export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description, tasks, owner } = data;

  let todoDto: TodoDto = {
    id,
    name,
    description,
    owner: owner ? toUserDto(owner) : null,
  };

  if (tasks) {
    todoDto = {
      ...todoDto,
      tasks: tasks.map((task: TaskEntity) => toTaskDto(task)),
    };
  }

  return todoDto;
};

export const toTaskDto = (data: TaskEntity): TaskDto => {
  const { id, name } = data;

  let taskDto: TaskDto = {
    id,
    name,
  };

  return taskDto;
};

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, username, email } = data;

  let userDto: UserDto = {
    id,
    username,
    email,
  };

  return userDto;
};
