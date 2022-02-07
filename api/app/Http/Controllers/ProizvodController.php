<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProizvodResource;
use App\Models\Proizvodi;
use Illuminate\Http\Request;

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
        //
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
