<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    //
    public function store(Request $request){
        $data = $request->validate([
            'descricao' => 'string|required',
            'role_id'   => 'required|exists:roles,id'
        ]);

        $complaint = new \App\Models\Denuncia;
        $complaint->descricao = $data['descricao'];
        $complaint->role_id = $data['role_id'];
        $complaint->status_id = 1;

        $complaint->save();

        return response()->json([
            'action' => true,
            'message' => 'Sua denúncia foi realizada com sucesso!'
        ], 201);
    }

    public function sectors(){
        $sectors = \App\Models\Role::whereNotIn('id', [1, 3])
            ->select('id', 'display_name as name')
            ->get();
        
        return response()->json([
            'action' => true,
            'sectors' => $sectors
        ]);
    }
}
