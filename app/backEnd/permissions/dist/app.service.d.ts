import { Repository } from 'typeorm';
import { Permission } from './entitie/permission.entity';
export declare class AppService {
    private permissionRepository;
    constructor(permissionRepository: Repository<Permission>);
    getHello(service: string, role: string): Promise<Permission>;
    catch(err: any): void;
}
