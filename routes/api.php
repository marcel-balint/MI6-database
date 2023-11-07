<?php

use App\Http\Controllers\Api\MissionController;
use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Api\StatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get("/people", [PersonController::class, 'index'])->name('people');
Route::get("/people/{id}", [PersonController::class, 'show'])->name('show');
Route::get('/statuses', [StatusController::class, 'index'])->name('statuses');
Route::get('/missions', [MissionController::class, 'index'])->name('missions');
Route::get('/missions/{mission_id}', [MissionController::class, 'show'])->name('mission');