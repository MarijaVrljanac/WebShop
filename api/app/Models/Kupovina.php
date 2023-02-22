<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kupovina extends Model
{
    use HasFactory;

    protected $fillable = [
        'sum',
        'cartNum',
        'user_id',
        'korpa_id',
      ];

      public function korpa()
      {
        return $this->belongsTo(Korpa::class);
      }

      public function user()
      {
        return $this->belongsTo(User::class);
      }
}
