<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function index()
    {
        $missions = Mission::get();

        return $missions;
    }

    public function show($mission_id)
    {
        $mission = Mission::findOrFail($mission_id);

        return $mission;
    }


    public function store(Request $request, $id)
    {
        $mission = Mission::findOrFail($id);
        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome');
        $mission->save();
        return [
            'status' => 'success'
        ];;
    }
}
