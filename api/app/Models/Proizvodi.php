<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proizvodi extends Model
{

    protected $fillable = [
        'image',
        'name',
        'description',
        'price',
        'amount',
        'category'
      ];

    use HasFactory;
}
