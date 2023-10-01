<?php

namespace App\Http\Controllers;

use App\Models\Consultation;
use Illuminate\Http\Request;
use App\Http\Requests\ConsultationRequest;
use Illuminate\Http\JsonResponse;

class ConsultationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        $consultations = Consultation::all();
        return response()->json(['data'=>$consultations], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ConsultationRequest $request):JsonResponse
    {
        $consultation=Consultation::create($request->all());
        try{
            return response()->json([
                'data'=>$consultation, 
                'success'=>true], 201);

        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Ha ocurrido un error al crear la consulta.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id):JsonResponse
    {
        $consultation = Consultation::find($id);
        return response ()->json($consultation, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Consultation $consultation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ConsultationRequest $request, $id):JsonResponse
    {
        $consultation = Consultation::find($id);
        $consultation->consultation=$request->consultation;
        $consultation->question=$request->question;
        $consultation->save();

        return response()->json([
            'success'=>true
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id):JsonResponse
    {
        Consultation::find($id)->delete();
        return response()->json([
            'success'=>true
        ], 200);
    }
}
