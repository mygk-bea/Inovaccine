export interface Agendamento {
    valor: string;
    fk_paciente_codPaciente: string;
    fk_clinica_codClinica: string;
    fk_campanha_codCampanha: string;
    dataHora: string;
    comparecimento: boolean;
    forma_Pagamento: string;
    residencial: boolean;
    // fk_campanha_codCampanha: number;
}
