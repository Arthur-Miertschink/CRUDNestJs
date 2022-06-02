import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaEntity } from './entities/materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MateriaEntity])],
  controllers: [MateriasController],
  providers: [MateriasService]
})
export class MateriasModule {}
