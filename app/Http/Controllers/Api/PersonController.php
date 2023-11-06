<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

use function Laravel\Prompts\select;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::with('aliases', 'image')->limit(20)->get();

        return $people;
    }
    public function show(string $id)
    {
        // it has GET by default so we start with 'with'
        $the_agent = Person::with('aliases', 'image')->findOrFail($id);

        return $the_agent;
    }
}
