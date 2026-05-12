<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Transaction extends Model
{
    use HasFactory;

    /**
     * Atribut yang dapat diisi secara massal.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'robot_id',    // Memperbaiki error MassAssignmentException
        'description',
        'amount',
        'type',
    ];

    /**
     * Relasi ke model Robot.
     */
    public function robot()
    {
        return $this->belongsTo(Robot::class);
    }
}