import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'user_crud',
      password: "carlos",
      database:'tasks',
      autoLoadEntities:true, 
      synchronize:true,
    })
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}