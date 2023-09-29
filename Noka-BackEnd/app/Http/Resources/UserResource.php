<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    
    public function toArray(Request $request): array
    {
        // print("Fuuu");   
        
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'lastname' => $this->lastname,
            'birthdate' => $this->birthdate,
            // 'gender' => $this->gender, 
            // 'province' => $this->province,
            // 'kidegoa' => $this->kidegoa,
            // 'etapa' => $this->etapa,
            'privacy'=> $this->privacy,
            'info' => $this->info,
            // 'role' => $this->role,
            // 'status' => $this->status
            
        ];
    }
}


