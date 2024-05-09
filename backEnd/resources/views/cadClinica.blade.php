<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    
<form action="{{route('cadClinica')}}" method="GET">

    <label for="">Nome</label>
    <input type="text" name="nome" id="nome">

    <label for="">CNPJ</label>
    <input type="text" name="cnpj" id="cnpj">

    <label for="">Endereço - logradouro</label>
    <input type="text" name="logradouro" id="logradouro">

    <label for="">Endereço - bairro</label>
    <input type="text" name="bairro" id="bairro">

    <label for="">Endereço - numero</label>
    <input type="text" name="numero" id="numero">

    <label for="">Endereço - cidade</label>
    <input type="text" name="cidade" id="cidade">

    <label for="">Endereço - complemento</label>
    <input type="text" name="complemento" id="complemento">

    <label for="">Endereço - Cep</label>
    <input type="text" name="cep" id="cep">

    <label for="">Cod_Login</label>
    <input type="text" name="codLogin" id="codLogin">

    <label for="">Telefone</label>
    <input type="text" name="telefone" id="telefone">

    <label for="">Periodo de funcionamento</label>
    <input type="text" name="periodoFunc" id="periodoFunc">

    <label for="">Medico</label>
    <input type="text" name="codMedico" id="codMedico">


</form>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>