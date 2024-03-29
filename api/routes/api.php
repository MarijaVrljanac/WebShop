<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\KupovinaController;
use App\Http\Controllers\PorukaController;
use App\Http\Controllers\ProizvodController;
use App\Http\Controllers\UserController;
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('korisnici', [UserController::class, 'index']);


Route::post('kontakt', [PorukaController::class, 'primiPoruku']);   //ulogovan ili ne svako moze da nam posalje poruku
Route::get('proizvodi',[ProizvodController::class,'index']);


Route::get('poruke',[PorukaController::class,'index']); //samo admin moze da vidi poruke

Route::post('kupi', [KupovinaController::class,'store']);

Route::group(['middleware' => ['auth:sanctum']], function () {  //obicni ulogovani korisnici
    Route::get('/profiles', function (Request $request) {  
        return auth()->user();
    });
   
   
  
    Route::post('logout', [AuthController::class, 'logout']);  
  
});
Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){ //ako je ulogovan admin

    Route::get('/proveri', function(){
        return response()->json(['message'=>'You are in','status'=>200],200);
    });

    Route::post('proizvodi',[ProizvodController::class,'store']);

});
