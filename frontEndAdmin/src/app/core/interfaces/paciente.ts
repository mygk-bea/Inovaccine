export interface Paciente {
    nome: string,
    dataNasc: string,
    cpf: string,
    telefone: string,
    fk_paciente_codEndereco: number,
    fk_paciente_codLogin: number,
    email: string,
    senha: string,
    responsavel: boolean
}
