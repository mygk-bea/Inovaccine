export interface Agendamento {
    valor: string;
    fk_vacina_codVacina: number;
    fk_paciente_codPaciente: number;
    fk_clinica_codClinica: number;
    dataHora: string;
    comparecimento: boolean;
    fk_campanha_codCampanha: number;
}
