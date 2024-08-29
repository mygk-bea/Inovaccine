export interface Clinica {
    codClinica: number;
    nome: string;
    cnpj: string;
    fk_clinica_codEndereco: number;
    telefone: string;
    fk_clinica_codLogin: number;
    periodoFunc_inicio: string;
    periodoFunc_fim: string;
    fk_clinica_codMedico: number;
}
