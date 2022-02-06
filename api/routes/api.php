<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PorukaController;
use App\Http\Controllers\UserController;
use App\Models\Poruka;
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
Route::get('users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('kontakt', [PorukaController::class, 'primiPoruku']);   //ulogovan ili ne svako moze da nam posalje poruku

Route::group(['middleware' => ['auth:sanctum']], function () {  
    Route::get('/profiles', function (Request $request) {  
        return auth()->user();
    });
   
   
  
    Route::post('logout', [AuthController::class, 'logout']);  



    Route::get('proizvodi',[ProizvodiController::class,'index']);
    Route::get('proizvodi/{id}',[ProizvodiController::class,'show']);

    Route::get('kategorija',[KategorijaController::class,'index']);
    Route::get('kategorija/{id}',[KategorijaController::class,'show']);

    Route::get('korpa',[KorpaController::class,'index']);
    Route::get('korpa/{id}',[KorpaController::class,'show']);

});
