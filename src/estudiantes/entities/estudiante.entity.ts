import { Genero } from "src/generos/entities/genero.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'estudiantes' })
export class Estudiante {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;
    
    @JoinTable()
    @ManyToMany(() => Genero, (genero) => genero.estudiantes, { eager: true })
    generos: Genero[];
}
