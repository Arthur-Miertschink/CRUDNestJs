import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('materia')
export class MateriaEntity {

    @PrimaryGeneratedColumn('uuid', {name: 'ID_MATERIA'})
    id: string;

    @Column({name: 'NM_MATERIA'})
    nome: string;

    @Column({name: 'NM_PROFESSOR'})
    professor: string;

    @Column({name: 'AREA_MATERIA'})
    area: string;

    @Column({name: 'MEDIA'})
    media: number;

    @CreateDateColumn({name: 'DT_CRIACAO'})
    dtCriacao: Date | string;

    @UpdateDateColumn({name: 'DT_ALTERACAO'})
    dtAlteracao?: Date | string;
    
}
