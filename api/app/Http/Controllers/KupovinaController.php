<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kupovina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KupovinaController extends Controller
{
    public function store(Request $request)
    {
        echo $request;
        $validator = Validator::make(
            $request->all(),
            [
                'sum' => 'required',
                'cartNum' => 'required',
                'user_id' => 'required',
                'korpa_id' => 'required'
            ]
            
        );
        
        if ($validator->fails()){
            return response()->json(['success' => false]);
        }



        $kupovina= Kupovina::create([
            'sum' => $request->sum,
            'cartNum' => $request->cartNum,
            'user_id' => $request->user_id,
            'korpa_id' => $request->korpa_id,
        ]);



        return  response()->json(['success' => true]);
    }
}
