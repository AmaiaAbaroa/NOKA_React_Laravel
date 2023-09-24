<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => [
                'required',
                'string',
                'confirmed',
                Password::min(5),
                // Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised(),
            ],
            'birthdate' => 'required|date',
            'gender' => 'required|in:Emakumezkoa,Gizonezkoa,No binario,Bestelakoak',
            'province' => 'required|in:Araba,Bizkaia,Gipuzkoa',
            'kidegoa' => 'required|in:Ahur Hezkuntza,Lehen Hezkuntza,Bigarren Hezkuntza',
            'etapa' => 'required|in:Ez dakit,Zerbait,Hutsik',
            'privacy' => 'required|boolean',
            'info' => 'required|boolean',
        ];
    }
}
