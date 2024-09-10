// src/menu/menu.service.ts
import { Injectable } from '@nestjs/common';
import { MenuGateway } from './menu.gateway';
@Injectable()
export class MenuService {
constructor(private menuGateway: MenuGateway) {}

  // Este método sería llamado cuando el menú o los ingredientes cambian
    async updateMenu(newMenuData: any) {
        // Aquí iría la lógica para actualizar el menú en la base de datos
        // ...

    // Notifica a todos los clientes conectados sobre el cambio de menú
    this.menuGateway.notifyMenuChange(newMenuData);
}
}
