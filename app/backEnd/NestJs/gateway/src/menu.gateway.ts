import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class MenuGateway {
    @WebSocketServer()
    server: Server;

    // Método para enviar notificaciones de cambios al frontend
    notifyMenuChange(updateData: any) {
        this.server.emit('menu-updated', updateData);
    }

    // Ejemplo de suscripción a un mensaje
    @SubscribeMessage('get-updates')
    handleGetUpdates(@MessageBody() data: string): string {
        return 'Connected to menu updates';
    }
}