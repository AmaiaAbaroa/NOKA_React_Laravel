<?php

namespace App\Http\Controllers;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // register a new user method
    public function register(RegisterRequest $request) {
        try {
            $data = $request->validated();

            // Depuración: Imprimir los datos
             dd($data);

            $user = User::create([
                'name' => $data['name'],
                'lastname' =>$data['lastname'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'birthdate' => $data['birthdate'],
                'gender' => $data['gender'],
                'province' => $data['province'],
                'kidegoa' => $data['kidegoa'],
                'etapa' => $data['etapa'],
                'privacy'=> $data['privacy'],
                'info' => $data['info'],
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            $cookie = cookie('token', $token, 60 * 24); // 1 day

            return response()->json([
                'user' => new UserResource($user),
            ])->withCookie($cookie);
        } catch (\Exception $e) {
        return response()->json([
            'message' => 'Akats bat gertatu da erabiltzailea erregistratzerakoan.',
            'error' => $e->getMessage(),
        ], 500);
    }
}

    // login a user method
    public function login(LoginRequest $request) {
        
        try{
            $data = $request->validated();

            $user = User::where('email', $data['email'])->first();

            if (!$user || !Hash::check($data['password'], $user->password)) {
                return response()->json([
                    'message' => 'Helbide elektronikoa edo pasahitza ez da zuzena!'
                ], 401);
            }

            $token = $user->createToken('auth_token')->plainTextToken;

            $cookie = cookie('token', $token, 60 * 24); // 1 day

            return response()->json([
                'user' => new UserResource($user),
            ])->withCookie($cookie);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Akats bat gertatu zen sartzerakoan.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // logout a user method
    public function logout(Request $request) {
        
        try{
            $request->user()->currentAccessToken()->delete();

            $cookie = cookie()->forget('token');

            return response()->json([
                'message' => 'Saio bukaera burutu da!'
            ])->withCookie($cookie);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while logging out.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // get the authenticated user method
    public function user(Request $request) {
        try{
            return new UserResource($request->user());
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Akats bat gertatu zen erabiltzailearen datuak jasotzean.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    
    // Obtener opciones de género
    public function getGenderOptions()
    {
        $genderOptions = User::getEnumValues('gender');

        return response()->json($genderOptions);
    }

    // Obtener opciones de provincias
    public function getProvinceOptions()
    {
        $provinceOptions = User::getEnumValues('province');

        return response()->json($provinceOptions);
    }

    // Obtener opciones de kidegoa
    public function getKidegoaOptions()
    {
        $kidegoaOptions = User::getEnumValues('kidegoa');

        return response()->json($kidegoaOptions);
    }

    // Obtener opciones de etapa
    public function getEtapaOptions()
    {
        $etapaOptions = User::getEnumValues('etapa');

        return response()->json($etapaOptions);
    }

    }

