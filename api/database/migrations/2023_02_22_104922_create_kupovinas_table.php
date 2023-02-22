<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKupovinasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kupovinas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('cartNum');
            $table->double('sum');
            $table->integer('user_id');
            $table->integer('korpa_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kupovinas');
    }
}
