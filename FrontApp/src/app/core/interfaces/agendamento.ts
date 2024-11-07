export interface Agendamento {
    modalidade: string;
    paciente: number;
    clinica: number;
    vacina: number[];
    data: string;
    hora: string;
    formaPagamento: string;
}
