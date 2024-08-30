export interface Clinica {
    codClinica: number;
    nome: string;
    cnpj: string;
    fk_clinica_codEndereco: number;
    telefone: string;
    email:string;
    senha: number;
    periodoFunc_inicio: string;
    periodoFunc_fim: string;
    fk_clinica_codMedico: number;
}
