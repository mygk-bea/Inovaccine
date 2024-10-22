export interface Login {
    email: string;
    senha: number;
}

export interface Autenticacao {
    validado: boolean;
    id: number;
    mensagem: string;
    error: {
        email: string[];
        senha: string[];
    };
}
