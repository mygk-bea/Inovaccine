export interface Campanha {
    nome: string,
    fk_campanha_codVacina: number,
    fk_campanha_codAgendamento: number,
    dataInicio: string,
    dataFim: string
}
