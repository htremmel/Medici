<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    # This represents an array of modifiable values for your table
    protected $fillable = ['amount', 'description', 'category'];

    # This is needed because by default, Laravel expects a "created_at" and "updated_at" timestamp columns
    # in MySQL tables. Since this sample implementation is not using these, this disables those columns
    # from being auto-populated
    public $timestamps = false;
}
