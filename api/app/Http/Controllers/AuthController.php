<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'password' =>  'required' , 
                'name' => 'required|string|max:100', 
                'email' => 'required|string|max:100|email',
                'phone' => 'string', //postaviti ogranicenje u kakvom formatu mora da bude mobilni telefon
                'birthdate' => 'string' //postaviti ogranicenje da ovo bas mora da bude datum
            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());


         
            return response()->json( $request->phone);

        $user = User::create([
            'name' => $request->name, 
            'email' => $request->email, 
            'phone' => $request->phone,
            'birthdate' =>$request->birthdate,
            'password' => Hash::make($request->password)]);
            


        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['data' => $user, 'acess_token' => $token, 'token_type' => 'Bearer']);
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['poruka' => 'Pogresan email ili password!']);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('LoginToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json($response);
    }


    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json(['Uspešno ste se izlogovali!']);
    }
}
