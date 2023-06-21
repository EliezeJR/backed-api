import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'generos' })
export class Genero {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Estudiante, (estudiante) => estudiante.generos)
    estudiantes: Estudiante[];
}
