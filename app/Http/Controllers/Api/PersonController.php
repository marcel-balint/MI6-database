<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

use function Laravel\Prompts\select;

class PersonController extends Controller
{
  public function index(Request $request)
  {
    $status = $request->input('status');


    $query = Person::with('aliases', 'image');
    if ($status) {
      $query = $query->where('status_id', $status);
    }

    $people = $query->limit(32)->get();

    return $people;
  }
  public function show(string $id)
  {
    // it has GET by default so we start with 'with'
    $the_agent = Person::with('aliases', 'image')->findOrFail($id);


    return $the_agent;
  }
}
