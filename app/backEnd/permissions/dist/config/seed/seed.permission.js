"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seederPermission = void 0;
const permission_entity_1 = require("../../entitie/permission.entity");
class seederPermission {
    async run(dataSource) {
        const permissionRepository = dataSource.getRepository(permission_entity_1.Permission);
        const valuesPermissions = [
            {
                nameService: "order",
                nameRole: "client",
                canCreate: true,
                canUpdate: false,
                canDelete: false,
                canGet: false
            },
            {
                nameService: "order",
                nameRole: "admin",
                canCreate: true,
                canUpdate: true,
                canDelete: true,
                canGet: true
            },
            {
                nameService: "inventory",
                nameRole: "client",
                canCreate: false,
                canUpdate: false,
                canDelete: false,
                canGet: false
            },
            {
                nameService: "inventory",
                nameRole: "admin",
                canCreate: true,
                canUpdate: true,
                canDelete: true,
                canGet: true
            },
            {
                nameService: "user",
                nameRole: "client",
                canCreate: false,
                canUpdate: true,
                canDelete: true,
                canGet: true
            },
            {
                nameService: "user",
                nameRole: "admin",
                canCreate: true,
                canUpdate: true,
                canDelete: true,
                canGet: true
            }
        ];
        for (let value of valuesPermissions) {
            const verify = await permissionRepository.findOne({ where: { nameService: value.nameService } });
            if (!verify) {
                const createPermission = permissionRepository.create(value);
                permissionRepository.save(createPermission);
            }
        }
    }
}
exports.seederPermission = seederPermission;
//# sourceMappingURL=seed.permission.js.map