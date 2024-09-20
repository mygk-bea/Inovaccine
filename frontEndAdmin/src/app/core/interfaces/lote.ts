export interface Lote {
    valor:number,
    qtd_minimo: number,
    qtd: number,
    fk_lote_codClinica: number,
    fk_lote_codFornecedor: number,
    fk_lote_codVacina: number,
    dataCompra: string
}


