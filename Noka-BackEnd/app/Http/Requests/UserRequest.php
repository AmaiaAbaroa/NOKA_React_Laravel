<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email|unique:users,email,' . $this->id, 
            'password' => 'nullable|min:8|mixedCase|numbers|symbols|uncompromised',
            'birthdate' => 'required|date',
            'gender' => ['required', 'enum:Emakumezkoa,Ez bitarra,Gizonezkoa,Beste bat'],
            'province' => ['required', 'enum:Araba, Bizkaia, Gipuzkoa'],
            'kidegoa' => ['required', 'enum:Ahur Hezkuntza, Lehen Hezkuntza, Bigarren Hezkuntza'],
            'etapa' => ['required', 'enum:Ez dakit, Zerbait, Hutsik'],
            'privacy' => 'required|boolean',  
            'info' => 'nullable|boolean',  
        ];
    }
}

