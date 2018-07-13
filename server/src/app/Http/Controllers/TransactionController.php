<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;

# Laravel's resource controller can automagically map these handlers when they follow the format
# https://laravel.com/docs/5.6/controllers#resource-controllers
class TransactionController extends Controller {
    public function index() {
        return Transaction::all();
    }

    // Create a transaction
    public function store(Request $request) {
        $transaction = Transaction::create($request->all());

        return response()->json($transaction, 201);
    }

    // Read a transaction
    public function show(Transaction $transaction) {
        return response()->json($transaction, 200);
    }

    // Update a transaction
    public function update(Request $request, Transaction $transaction) {
        $transaction->update($request->all());

        return response()->json($transaction, 200);
    }

    // Delete a transaction
    public function delete(Transaction $transaction) {
        $transaction->delete();

        return response()->json(null, 200);
    }
}
