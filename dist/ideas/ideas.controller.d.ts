/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
import { CreateIdeaDto } from './dtos/create-idea.dto';
import { UpdateIdeaDto } from './dtos/update-idea.dto';
import { IdeasService } from './ideas.service';
export declare class IdeasController {
    private readonly ideasService;
    constructor(ideasService: IdeasService);
    create(createProjectDto: CreateIdeaDto): Promise<import("./schema/idea.schema").Ideas & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getAll(): Promise<(import("./schema/idea.schema").Ideas & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getById(id: string): Promise<import("./schema/idea.schema").Ideas & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateProjectDto: UpdateIdeaDto): Promise<import("./schema/idea.schema").Ideas & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: string): Promise<import("./schema/idea.schema").Ideas & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
