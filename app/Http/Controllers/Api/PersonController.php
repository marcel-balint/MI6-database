<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

use function Laravel\Prompts\select;

class PersonController extends Controller
{
    public function index() {
        $people = Person::with('aliases', 'image')->limit(20)->get();
        return $people;
    }


}
