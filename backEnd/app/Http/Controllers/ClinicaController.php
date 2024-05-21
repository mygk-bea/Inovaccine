<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clinica;
use App\Models\Medico;
use App\Models\Endereco;
use App\Models\Usuario;

class ClinicaController extends Controller
{

    private $objMedico;
    private $objClinica;
    private $objEndereco;
    private $objUsuario;

    public function __construct(){
        $this->objMedico = new Medico();
        $this->objClinica = new Clinica();
        $this->objEndereco = new Endereco();
        $this->objUsuario = new Usuario();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $medicos= $this->objMedico->all();
        return view('cadClinica', compact('medicos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $endereco = $this->objEndereco->create([
            'logradouro'=>$request->logradouro,
            'bairro'=>$request->bairro,
            'numero'=>$request->numero,
            'cidade'=>$request->cidade,
            'complemento'=>$request->complemento,
            'cep'=>$request->cep
        ]);

        $usuario = $this->objUsuario->create([
            'tipo'=>'medico',
            'email'=>$request->email,
            'senha'=>$request->senha
        ]);

        $clinica = $this->objClinica->create([
            'nome'=>$request->nome,
            'cnpj'=>$request->cnpj,
            'telefone'=>$request->telefone,
            'periodo_funcionamento'=>$request->periodo_funcionamento,
            'fk_clinica_codMedico'=>$request->fk_clinica_codMedico,
            'fk_clinica_codEndereco'=>$endereco->codEndereco,
            'fk_clinica_codLogin'=>$usuario->codLogin
        ]);

        return redirect()->route('cadClinica');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
