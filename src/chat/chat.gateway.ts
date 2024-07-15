import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { AddMessageDto } from './dto/add-message.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger = new Logger('ChatGateway');

  @SubscribeMessage('chat') // subscribe to chat event messages
  handleMessage(@MessageBody() payload: AddMessageDto): AddMessageDto {
    // console.log(`Message received: ${JSON.stringify(payload.author)} - ${payload.body}`);
    const valueSendChat = {
      author: { id: 2, name: 'Ronaldo' },
      body: 'TAO Chào mày',
    };
    this.server.emit('chat', valueSendChat); // broadbast a message to all clients
    return payload; // return the same payload data
  }

  // it will be handled when a client connects to the server
  handleConnection(socket: Socket) {
    this.logger.log(`Socket connected: ${socket.id}`);
  }

  // it will be handled when a client disconnects from the server
  handleDisconnect(socket: Socket) {
    this.logger.log(`Socket disconnected: ${socket.id}`);
  }
}
