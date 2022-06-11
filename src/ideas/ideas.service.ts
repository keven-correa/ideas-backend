import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIdeaDto } from './dtos/create-idea.dto';
import { UpdateIdeaDto } from './dtos/update-idea.dto';
import { Ideas, IdeasDocument } from './schema/idea.schema';

@Injectable()
export class IdeasService {
    constructor(@InjectModel(Ideas.name) private projects: Model<IdeasDocument>){}

    async create(createProjectDto: CreateIdeaDto){
        return await this.projects.create(createProjectDto);
    }

    async getAll(){
        return await this.projects.find();
    }

    async getById(id: string){
        return await this.projects.findById(id);
    }

    async update(id: string, updateProjectDto: UpdateIdeaDto){
        return await this.projects.findByIdAndUpdate(id, updateProjectDto, {new: true});
    }

    async delete(id: string){
        return await this.projects.findByIdAndDelete(id);
    }

}
