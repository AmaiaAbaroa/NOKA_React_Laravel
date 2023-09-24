<?php

namespace App\Http\Middleware;

use Closure;

class EnumValuesValidator
{
    public function handle($request, Closure $next, ...$enums)
    {
        foreach ($enums as $enum) {
            $values = config("enums.$enum");
            $input = $request->input($enum);

            // Verificar si $values es null antes de usarlo en in_array()
            if ($values === null || !in_array($input, $values)) {
                return response()->json([
                    'message' => "Valor no válido para $enum.",
                ], 422);
            }
        }

        return $next($request);
    }
}
