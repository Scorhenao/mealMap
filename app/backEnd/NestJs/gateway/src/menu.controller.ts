import { Controller, Post, Body } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Post('update')
    async updateMenu(@Body() newMenuData: any) {
        await this.menuService.updateMenu(newMenuData);
        return { message: 'Menu updated and notification sent' };
    }
}