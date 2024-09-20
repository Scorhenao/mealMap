import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { roleGuard } from './guards/guards.guard';
import { apiKeyGuard } from './guards/apiKey.guard';

@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal:true,
            envFilePath:".env"
        })
    ],
    providers:[roleGuard,apiKeyGuard],
    exports:[roleGuard,apiKeyGuard]
})
export class CommonModule {}
