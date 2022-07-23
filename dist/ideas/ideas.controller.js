"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdeasController = void 0;
const common_1 = require("@nestjs/common");
const create_idea_dto_1 = require("./dtos/create-idea.dto");
const update_idea_dto_1 = require("./dtos/update-idea.dto");
const ideas_service_1 = require("./ideas.service");
let IdeasController = class IdeasController {
    constructor(ideasService) {
        this.ideasService = ideasService;
    }
    async create(createProjectDto) {
        return await this.ideasService.create(createProjectDto);
    }
    async getAll() {
        return await this.ideasService.getAll();
    }
    async getById(id) {
        return await this.ideasService.getById(id);
    }
    async update(id, updateProjectDto) {
        return await this.ideasService.update(id, updateProjectDto);
    }
    async delete(id) {
        return await this.ideasService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_idea_dto_1.CreateIdeaDto]),
    __metadata("design:returntype", Promise)
], IdeasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IdeasController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdeasController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_idea_dto_1.UpdateIdeaDto]),
    __metadata("design:returntype", Promise)
], IdeasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdeasController.prototype, "delete", null);
IdeasController = __decorate([
    (0, common_1.Controller)('ideas'),
    __metadata("design:paramtypes", [ideas_service_1.IdeasService])
], IdeasController);
exports.IdeasController = IdeasController;
//# sourceMappingURL=ideas.controller.js.map