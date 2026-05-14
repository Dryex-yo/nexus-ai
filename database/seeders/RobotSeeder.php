<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RobotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Robot::insert([
            [
                'name' => 'Atlas-Prime',
                'model' => 'AT-X500',
                'status' => 'ONLINE',
                'efficiency' => 98.5,
                'location' => 'Factory Floor 1',
                'battery' => 92,
                'task' => 'Assembly Line A',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sentinel-7',
                'model' => 'SN-2000',
                'status' => 'ONLINE',
                'efficiency' => 94.2,
                'location' => 'Inspection Bay',
                'battery' => 78,
                'task' => 'Idle',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nexus-Core',
                'model' => 'NX-PRO',
                'status' => 'WARNING',
                'efficiency' => 87.8,
                'location' => 'Server Room',
                'battery' => 45,
                'task' => 'Data Processing',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Vanguard-X',
                'model' => 'VG-1200',
                'status' => 'MAINTENANCE',
                'efficiency' => 0,
                'location' => 'Maintenance Bay',
                'battery' => 15,
                'task' => 'Scheduled Maintenance',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Echo-5',
                'model' => 'EC-500',
                'status' => 'ONLINE',
                'efficiency' => 96.1,
                'location' => 'Warehouse B',
                'battery' => 88,
                'task' => 'Logistics Sorting',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Quantum-Link',
                'model' => 'QL-XT',
                'status' => 'OFFLINE',
                'efficiency' => 0,
                'location' => 'Charging Station',
                'battery' => 0,
                'task' => 'Offline',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
