export interface Postagem {
    titulo: string;
    conteudo:string;
    data_hora_postagem: string;
    fk_post_codFuncionario:number;
    curtida: boolean;
}
