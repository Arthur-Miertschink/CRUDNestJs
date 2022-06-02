export class CreateMateriaDto {
    id?: string;
    nome: string;
    professor: string;
    area: string;
    media: number;
    dtCriacao: Date | string;
    dtAlteracao?: Date | string;
}
