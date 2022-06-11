import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateIdeaDto } from './dtos/create-idea.dto';
import { UpdateIdeaDto } from './dtos/update-idea.dto';
import { IdeasService } from './ideas.service';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  async create(@Body() createProjectDto: CreateIdeaDto){
    return await this.ideasService.create(createProjectDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(){
    return await this.ideasService.getAll()
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string){
    return await this.ideasService.getById(id);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateIdeaDto){
    return await this.ideasService.update(id, updateProjectDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string){
    return await this.ideasService.delete(id);
  }
}
