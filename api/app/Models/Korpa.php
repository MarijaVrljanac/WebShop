<?php

namespace App\Models;
use App\Models\Proizvodi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Korpa extends Model
{

    protected $fillable = [
      'image',
      'name',
      'description',
      'price',
      'amount',
      'category'
    ];

  

    public function proizvod(){
        return $this->belongsTo(Proizvodi::class);
    }
    use HasFactory;
}
