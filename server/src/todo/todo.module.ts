import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TodoEntity } from 'src/todo/entity/todo.entity';
import { TaskEntity } from 'src/todo/entity/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entity/user.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forFeature([TodoEntity, TaskEntity, UserEntity]),
  ],
  controllers: [TodoController, TaskController],
  providers: [TodoService, TaskService],
})
export class TodoModule {}
