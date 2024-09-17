export interface Estoque {
    fk_estoque_codLote: number,
    qtd_minimo: number,
    qtd: number,
    fk_estoque_codClinica: number,
    fk_estoque_codVacina: number
}