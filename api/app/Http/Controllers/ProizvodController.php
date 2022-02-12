<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProizvodResource;
use App\Models\Proizvodi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProizvodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProizvodResource::collection(Proizvodi::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' =>  'required' , 
                'description' => 'required|string|max:100', 
                'price' => 'required',
                'amount' => 'required',  
                'category' => 'required'  ,
                'image' =>'  '

            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());


         
            

        $p = Proizvodi::create([
                'name' =>   $request->name, 
                'description' => $request->description, 
                'price' =>  $request->price, 
                'amount' =>  $request->amount, 
                'category' =>  $request->category, 
                'image' => 'https://media.istockphoto.com/photos/assortment-of-multicolored-candies-jelly-beans-and-lollipops-picture-id1270389595?b=1&k=20&m=1270389595&s=170667a&w=0&h=j9las-CDlYSyWhmg-2jZDg22UAPGjpSv88aFsr8u-38='
           
        ]);
        return response()->json(["Uspesno kreiran proizvod",$p]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProizvodResource(Proizvodi::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function edit(Proizvodi $proizvod)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Proizvodi $proizvod)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function destroy(Proizvodi $proizvod)
    {
        //
    }
}
