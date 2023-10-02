<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        $users = User::all();
        return response()->json(['data'=>$users], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request):JsonResponse
    {
        $user=User::create($request->all());

        return response()->json([
            'success'=>true,
            'data'=>$user], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id):JsonResponse
    {
        $user = User::find($id);
        return response ()->json($user, 200);
    }


    /**
     * Update the specified resource in storage.
     */
     
     public function update(Request $request, $id): JsonResponse
     {
         $user = User::find($id);
        
         if (!$user) {
             return response()->json(['error' => 'Usuario no encontrado'], 404);
         }
     
         // Obtener los datos de la solicitud
         $data = $request->all();
     
         // Actualizar los campos del usuario con los datos de la solicitud
         $user->update($data);
         
         // Recuperar el usuario actualizado
         $updatedUser = User::find($id);

         $updatedUser->save();
        //  print("Update Method" . $updatedUser);

         return response()->json([ 'data' => $updatedUser, 'success' => true,], 200);
     }
     

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id):JsonResponse
    {
        User::find($id)->delete();
        return response()->json([
            'success'=>true
        ], 200);
    }
}
