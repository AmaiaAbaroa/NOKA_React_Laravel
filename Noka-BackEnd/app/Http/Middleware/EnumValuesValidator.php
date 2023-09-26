<?php

namespace App\Http\Middleware;

use Closure;
use App\Rules\EnumValue;

class EnumValuesValidator
{
    
//     public function handle($request, Closure $next, ...$enums)
//     {
//         foreach ($enums as $enum) {
//             $values = config("enums.$enum");
//             $input = $request->input($enum);

//             // Verificar si $values es null antes de usarlo en in_array()
//             if ($values === null || !in_array($input, $values)) {
//                 return response()->json([
//                     'message' => "Valor no válido para $enum.",
//                 ], 422);
//             }
//         }

//         return $next($request);
//     }
// }



// public function handle($request, Closure $next, ...$enums)
// {
//     foreach ($enums as $enum) {
//         $values = config("enums.$enum");
//         $input = $request->input($enum);

//         // Registrar el valor de $input en el registro (log)
//         error_log("Valor de $enum: " . print_r($input, true));

//         // Verificar si $values es null antes de usarlo en in_array()
//         if ($values === null || !in_array($input, $values, true)) {
//             return response()->json([
//                 'message' => "Valor no válido para $enum.",
//             ], 422);
//         }
//     }

//     return $next($request);
// }
// }




// public function handle($request, Closure $next, ...$enums)
// {
    // foreach ($enums as $enum) {
        
    //     print($enum);
    //     print(`enums.$enum`);

    //     $values = config("enums.$enum");
    //     $input = $request->input($enum);

    //     // Registrar el valor de $input en el registro (log)
    //     error_log("Valor de $enum: " . print_r($input, true)); 

    //     // Verificar si $values es null antes de usarlo en in_array()
    //     if ($values === null || !in_array($input, $values, true)) {
    //         return response()->json([
    //             'message' => "Valor no válido para $enum.",
    //         ], 422);
    //     }
    // }

    // return $next($request);

    public function handle($request, Closure $next, ...$enums)
{
    foreach ($enums as $enum) {
        $validator = new EnumValue($enum);
        $input = $request->input($enum);

        if (!$validator->passes($enum, $input)) {
            return response()->json([
                'message' => "Valor no válido para $enum.",
            ], 422);
        }
    }

    return $next($request);
}

}
