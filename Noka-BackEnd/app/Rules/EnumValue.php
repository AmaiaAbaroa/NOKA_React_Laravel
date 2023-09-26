<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\User; 

class EnumValue implements ValidationRule
{
    protected $enumField;

    public function __construct($enumField)
    {
        $this->enumField = $enumField;
    }

    public function passes($attribute, $value)
    {
        $enumValues = User::getEnumValues($this->enumField);
        print('enumValues Rules: $enumValues');
        error_log("Valor a validar para {$this->enumField}: $value");
        error_log("Valores permitidos para {$this->enumField}: " . implode(', ', $enumValues));
        return in_array($value, $enumValues);
    }

    public function message()
    {
        return "El campo :attribute no es un valor válido para {$this->enumField}.";
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        //
    }
}

