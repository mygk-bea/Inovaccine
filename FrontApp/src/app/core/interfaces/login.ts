export interface Login {
    email: string;
    senha: string;
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