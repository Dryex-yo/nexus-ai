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
            ['name' => 'Atlas-Prime', 'model' => 'AT-X500', 'status' => 'ONLINE', 'efficiency' => 98.5, 'location' => 'Zone 1', 'battery' => 85],
            ['name' => 'Nexus-Core', 'model' => 'NX-PRO', 'status' => 'WARNING', 'efficiency' => 87.8, 'location' => 'Zone 3', 'battery' => 45],
        ]);
    }
}
