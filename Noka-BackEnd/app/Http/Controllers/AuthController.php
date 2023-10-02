<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;



class AuthController extends Controller
{

    public function register(RegisterRequest $request): JsonResponse
     {
        try {

            $data = $request->validated();

            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'lastname' => $data['lastname'],
                'birthdate' => $data['birthdate'],
                'privacy' => $data['privacy'],
                'info' => $data['info'],
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            $cookie = cookie('token', $token, 60 * 24); 
            

            return response()->json([
                'user' => new UserResource($user),
            ], 200)->withCookie($cookie);
            

        } catch (\Exception $e) {
        return response()->json([
            'message' => 'An error occurred while registering the user.',
            'error' => $e->getMessage(),
        ], 500);
    }
}

    public function login(LoginRequest $request) {
        
        try{
            $data = $request->validated();
            
            $user = User::where('email', $data['email'])->first();

            if (!$user || !Hash::check($data['password'], $user->password)) {
                return response()->json([
                    'message' => 'Email or password is incorrect!'
                ], 401);
            }

            $token = $user->createToken('auth_token')->plainTextToken;

            $cookie = cookie('token', $token, 60 * 24); 

            return response()->json([
                'user' => new UserResource($user),
            ])->withCookie($cookie);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while logging in.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function logout(Request $request) {
        
        try{
            $request->user()->currentAccessToken()->delete();

            $cookie = cookie()->forget('token');

            return response()->json([
                'message' => 'Logged out successfully!'
            ])->withCookie($cookie);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while logging out.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function user(Request $request) {
        try{
            return new UserResource($request->user());
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while fetching user data.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


}
