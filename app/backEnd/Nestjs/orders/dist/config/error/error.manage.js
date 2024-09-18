"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorManage = void 0;
const common_1 = require("@nestjs/common");
class errorManage extends Error {
    constructor({ type, message, }) {
        super(`${type}:${message}`);
    }
    static errorManageController(message) {
        const name = message.split(':')[0];
        if (name) {
            throw new common_1.HttpException(message, common_1.HttpStatus[name]);
        }
        else {
            throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
exports.errorManage = errorManage;
//# sourceMappingURL=error.manage.js.map