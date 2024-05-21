<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    
<form action={{ route('cadClinica/create') }} method="POST">
    @csrf
<div>
<label for="">Nome</label>
    <input type="text" name="nome" id="nome">
</div>
<div>
<label for="">CNPJ</label>
    <input type="text" name="cnpj" id="cnpj">
</div>
<div>
<hr>

<h1>Endereço</h1>
<label for="">Endereço - logradouro</label>
    <input type="text" name="logradouro" id="logradouro">
</div>
<div>
<label for="">Endereço - bairro</label>
    <input type="text" name="bairro" id="bairro">
</div>
<div>
<label for="">Endereço - numero</label>
    <input type="text" name="numero" id="numero">
</div>
<div>
<label for="">Endereço - cidade</label>
    <input type="text" name="cidade" id="cidade">
</div>
<div>
<label for="">Endereço - complemento</label>
    <input type="text" name="complemento" id="complemento">
</div>
<div>
<label for="">Endereço - Cep</label>
    <input type="text" name="cep" id="cep">
</div>
<hr>
<h1>Login</h1>
<div>
<label for="">Email</label>
    <input type="text" name="email" id="email">
</div>
<label for="">senha</label>
    <input type="text" name="senha" id="senha">
</div>

<hr>
<div>
<label for="">Telefone</label>
    <input type="text" name="telefone" id="telefone">
</div>
<div>
<label for="">Periodo de funcionamento</label>
    <input type="datetime-local" name="periodo_funcionamento" id="periodo_funcionamento">
</div>
<div>
<select name="fk_clinica_codMedico" id="fk_clinica_codMedico">
    <option value="">Selecione um médico</option>
    @foreach($medicos as $medico)
    <option value="{{$medico->codMedico}}">{{$medico->nome}}</option>
    @endforeach
</select>

<button type="submit">Enviar</button>

</form>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>