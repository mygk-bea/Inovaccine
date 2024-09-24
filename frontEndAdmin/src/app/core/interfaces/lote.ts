export interface Lote {
    codLote: string,
    valor:number,
    qtd_minimo: number,
    qtd: number,
    fk_lote_codClinica: number,
    fk_lote_codVacina: number,
    dataCompra: string,
    dataValidade: string,
    nome: string;
    telefone: string;
    cnpj: string;
}