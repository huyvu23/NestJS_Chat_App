import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { UserModule } from './user/user.module';
import { configDatabase } from './config/database.config';
@Module({
  imports: [configDatabase, UserModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
