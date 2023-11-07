<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function index() {
        $missions = Mission::get();

        return $missions;
    }

    public function show($mission_id)
    {
        $mission = Mission::findOrFail($mission_id);
        
        return $mission;
    }
}
