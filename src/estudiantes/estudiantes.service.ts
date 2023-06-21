import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
    @InjectRepository(Genero)
    private generoRepo: Repository<Genero>
  ) { }

  async create(createEstudianteDto: CreateEstudianteDto) {
    const value = undefined as number;

    console.log(value);




    const {  generos, ...estudianteData } = createEstudianteDto

    let generoModels = [];

    if (createEstudianteDto.generos) {
      generoModels = await this.generoRepo.find({
        where: { name: In([...createEstudianteDto.generos]) }
      })
    }

    const model = this.estudianteRepository.create({
      ...estudianteData,
      generos: generoModels

    })
    await this.estudianteRepository.save(model);

    return model;
  }

  async findAll() {
    return this.estudianteRepository.find({ relations: ['generos'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
