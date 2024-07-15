import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';

export const configDatabase = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'nestjs_database_chat_app',

  entities: [User],

  // auto update table
  synchronize: true,
});
