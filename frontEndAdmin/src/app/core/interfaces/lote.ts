export interface Lote {
    valor:number,
    qtd_minimo: number,
    qtd: number,
    fk_clinica_codClinica: number,
    fk_fornecedor_codFornecedor: number,
    fk_vacina_codVacina: number,
    dataCompra: string
}