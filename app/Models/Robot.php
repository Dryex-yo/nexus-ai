<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Robot extends Model
{
    use HasFactory;

    /**
     * Kolom yang dapat diisi secara massal.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'model',
        'status',   // <--- Tambahkan ini untuk memperbaiki error
        'battery',
        'efficiency',
        'location',
    ];

    // Tambahkan ini di app/Models/Robot.php
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}