<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{

    public function index():JsonResponse
    {
        $users = User::all();
        return response()->json(['data'=>$users], 200);
    }

    public function store(UserRequest $request):JsonResponse
    {
        $user=User::create($request->all());

        return response()->json([
            'success'=>true,
            'data'=>$user], 201);
    }


    public function show($id):JsonResponse
    {
        $user = User::find($id);
        return response ()->json($user, 200);
    }

     
     public function update(Request $request, $id): JsonResponse
     {
         $user = User::find($id);
        
         if (!$user) {
             return response()->json(['error' => 'Usuario no encontrado'], 404);
         }
     
         $data = $request->all();

         $user->update($data);

         $updatedUser = User::find($id);

         $updatedUser->save();

         return response()->json([ 'data' => $updatedUser, 'success' => true,], 200);
     }
     


    public function destroy($id):JsonResponse
    {
        User::find($id)->delete();
        return response()->json([
            'success'=>true
        ], 200);
    }
}
