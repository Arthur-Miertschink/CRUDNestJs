import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { MateriaEntity } from './entities/materia.entity';

@Injectable()
export class MateriasService {
  
  constructor(
    @InjectRepository(MateriaEntity)
    private materiasRepository: Repository<MateriaEntity>

  ){}

  async create(createMateriaDto: CreateMateriaDto) {
    return await this.materiasRepository.save(this.materiasRepository.create(createMateriaDto))
  }

  async findAll() {
    return await this.materiasRepository.find();
  }

  async findOne(id: string) {
    return await this.materiasRepository.findOne({
      where: {id},
    });
  }

  async update(id: string, updateMateriaDto: UpdateMateriaDto) {
    return await this.materiasRepository.update({id}, updateMateriaDto);
  }

  async remove(id: string) {
    return await this.materiasRepository.delete(id);
  }
}
