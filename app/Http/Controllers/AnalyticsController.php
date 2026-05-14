<?php

namespace App\Http\Controllers;

use App\Models\Robot;
use App\Models\Transaction;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;

class AnalyticsController extends Controller
{
    public function index(): Response
    {
        $robots = Robot::all();
        
        // Calculate stats
        $totalTasksCompleted = Transaction::where('type', 'REVENUE')->sum('amount') / 1000; // Convert to unit
        $totalRobots = $robots->count();
        $onlineRobots = $robots->where('status', 'ONLINE')->count();
        $maintenanceRobots = $robots->where('status', 'MAINTENANCE')->count();
        $avgUptime = 99.2; // Placeholder - calculate from real data if available
        $energySaved = 2850; // Placeholder in kWh
        
        // Efficiency Trend Data - Last 7 days
        $efficiencyTrendData = [
            ['day' => 'Mon', 'actual' => 92, 'target' => 90],
            ['day' => 'Tue', 'actual' => 90, 'target' => 90],
            ['day' => 'Wed', 'actual' => 91, 'target' => 90],
            ['day' => 'Thu', 'actual' => 95, 'target' => 90],
            ['day' => 'Fri', 'actual' => 92, 'target' => 90],
            ['day' => 'Sat', 'actual' => 93, 'target' => 90],
            ['day' => 'Sun', 'actual' => 94, 'target' => 90],
        ];
        
        // Task Completion Rate - Hourly distribution
        $taskCompletionData = [
            ['hour' => '00', 'completed' => 15],
            ['hour' => '04', 'completed' => 22],
            ['hour' => '08', 'completed' => 45],
            ['hour' => '12', 'completed' => 75],
            ['hour' => '16', 'completed' => 65],
            ['hour' => '20', 'completed' => 55],
        ];

        return Inertia::render('Analytics', [
            'stats' => [
                'total_tasks_completed' => number_format($totalTasksCompleted, 0),
                'avg_uptime' => $avgUptime,
                'active_robots' => "{$onlineRobots} / {$totalRobots}",
                'in_maintenance' => $maintenanceRobots,
                'energy_saved' => $energySaved,
                'avg_efficiency' => number_format($robots->avg('efficiency'), 1),
            ],
            'efficiency_trend' => $efficiencyTrendData,
            'task_completion' => $taskCompletionData,
        ]);
    }
}
