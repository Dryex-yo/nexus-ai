<?php

namespace App\Http\Controllers;

use App\Models\Robot;
use Inertia\Inertia;
use Inertia\Response;
use App\Events\RobotUpdated;
use App\Models\Transaction;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'robots' => Robot::all(),
            'stats' => [
                'total_online' => Robot::where('status', 'ONLINE')->count(),
                'avg_efficiency' => Robot::avg('efficiency'),
            ],
            'recent_transactions' => Transaction::with('robot')
                    ->latest()
                    ->take(5)
                    ->get(),
        ]);
    }
    
    public function toggleMaintenance(Robot $robot)
    {
        $isEnteringMaintenance = $robot->status !== 'MAINTENANCE';
        $newStatus = $isEnteringMaintenance ? 'MAINTENANCE' : 'ONLINE';
        
        $robot->update(['status' => $newStatus]);

        // Jika robot mulai maintenance, catat perkiraan biaya sebagai Expense
        if ($isEnteringMaintenance) {
            \App\Models\Transaction::create([
                'robot_id' => $robot->id,
                'description' => "Preventive Maintenance: {$robot->name}",
                'amount' => 500000.00, // Contoh biaya flat 500rb
                'type' => 'EXPENSE',
            ]);
        }

        event(new \App\Events\RobotUpdated($robot));
        return back();
    }
}