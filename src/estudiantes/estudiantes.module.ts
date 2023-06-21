import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { Estudiante } from './entities/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from 'src/generos/entities/genero.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Estudiante,Genero])],
  controllers: [EstudiantesController],
  providers: [EstudiantesService]
})
export class EstudiantesModule {}
