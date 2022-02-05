<?php

namespace App\Models;
use App\Models\Proizvodi;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategorija extends Model
{
    protected $fillable = [
        'naziv'
    ];

    public function proizvodi(){
        return $this->hasMany(Proizvodi::class);
    }

    use HasFactory;
}
