import { Head, Link } from '@inertiajs/react';
import {
    LayoutDashboard, Bot, BarChart3, Cpu, Settings,
    User, LogOut, Bell, Zap, Activity, Shield, Pause, Play
} from 'lucide-react';
import { useState } from 'react';
import AppShell from '@/Layouts/AppShell';

export default function AIControl() {
    type SystemStatus = 'RUNNING' | 'PAUSED';

    const [systemStates, setSystemStates] = useState<Record<string, SystemStatus>>({
        'ai-001': 'RUNNING',
        'ai-002': 'RUNNING',
        'ai-003': 'RUNNING',
        'ai-004': 'PAUSED',
    });

    const toggleSystem = (systemId: string) => {
        setSystemStates(prev => ({
            ...prev,
            [systemId]: prev[systemId] === 'RUNNING' ? 'PAUSED' : 'RUNNING'
        }));
    };

    const systems = [
        {
            id: 'ai-001',
            name: 'Neural Core',
            cpu: 67,
            memory: 82,
            requests: '15,420 req',
            accuracy: '98.5% acc',
            status: systemStates['ai-001']
        },
        {
            id: 'ai-002',
            name: 'Vision Processor',
            cpu: 45,
            memory: 71,
            requests: '8,950 req',
            accuracy: '97.2% acc',
            status: systemStates['ai-002']
        },
        {
            id: 'ai-003',
            name: 'Decision Engine',
            cpu: 78,
            memory: 65,
            requests: '12,350 req',
            accuracy: '99.1% acc',
            status: systemStates['ai-003']
        },
        {
            id: 'ai-004',
            name: 'Learning Module',
            cpu: 12,
            memory: 34,
            requests: '0 req',
            accuracy: '94.8% acc',
            status: systemStates['ai-004']
        },
    ];

    const stats = [
        { label: 'Active Systems', value: '3 / 4', icon: Cpu, color: 'text-[#00D1FF]' },
        { label: 'Avg CPU Load', value: '51%', icon: Activity, color: 'text-purple-400' },
        { label: 'Requests/sec', value: '36.7K', icon: Zap, color: 'text-emerald-400' },
        { label: 'Avg Accuracy', value: '97.4%', icon: Shield, color: 'text-amber-400' },
    ];

    return (
        <AppShell title="AI Control Center" subtitle="Manage and monitor AI systems" searchPlaceholder="Search AI systems, nodes, or logs...">
            <Head title="Nexus AI - AI Control Center" />

            <main className="flex-1 p-8 overflow-y-auto">

                {/* Action Buttons */}
                <div className="flex justify-between items-center mb-8">
                    <div></div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                            Restart All
                        </button>
                        <button className="px-6 py-2.5 rounded-xl bg-[#00D1FF] border border-[#00D1FF] text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(0,209,255,0.3)] hover:shadow-[0_0_30px_rgba(0,209,255,0.5)] transition-all">
                            Configure
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-[#0D1425] border border-white/5 p-6 rounded-[1.25rem] hover:border-white/10 transition-all">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                                    <h4 className="text-3xl font-black text-white leading-none tracking-tight">{stat.value}</h4>
                                </div>
                                <div className="bg-[#161F32] p-2.5 rounded-xl border border-white/5">
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Systems Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {systems.map((system) => (
                        <div 
                            key={system.id}
                            className="bg-[#0D1425] border border-cyan-500/30 rounded-[1.5rem] p-6 shadow-[0_8px_32px_rgba(0,209,255,0.1)] relative overflow-hidden group hover:border-cyan-500/50 transition-all"
                        >
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#00D1FF]/20 rounded-lg flex items-center justify-center border border-[#00D1FF]/50">
                                            <Cpu className="w-5 h-5 text-[#00D1FF]" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-black text-white">{system.name}</h3>
                                            <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">{system.id}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2.5 h-2.5 rounded-full ${system.status === 'RUNNING' ? 'bg-emerald-500 shadow-[0_0_12px_#10b981]' : 'bg-slate-600'}`} />
                                        <button
                                            onClick={() => toggleSystem(system.id)}
                                            className={`p-2 rounded-lg border transition-all ${
                                                system.status === 'RUNNING'
                                                    ? 'bg-[#161F32] border-white/5 text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10'
                                                    : 'bg-[#161F32] border-white/5 text-slate-500 hover:border-[#00D1FF]/50 hover:text-[#00D1FF]'
                                            }`}
                                        >
                                            {system.status === 'RUNNING' ? (
                                                <Pause className="w-4 h-4" />
                                            ) : (
                                                <Play className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="mb-6 pb-6 border-b border-white/10">
                                    <p className={`text-[10px] font-bold uppercase tracking-widest ${
                                        system.status === 'RUNNING' 
                                            ? 'text-emerald-400' 
                                            : 'text-amber-400'
                                    }`}>
                                        ● {system.status}
                                    </p>
                                </div>

                                {/* Performance Metrics */}
                                <div className="space-y-4 mb-6">
                                    {/* CPU */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase">CPU</span>
                                            <span className="text-sm font-black text-white">{system.cpu}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-[#161F32] rounded-full overflow-hidden shadow-inner">
                                            <div 
                                                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_12px_rgba(251,146,60,0.4)] transition-all duration-500"
                                                style={{ width: `${system.cpu}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Memory */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase">Memory</span>
                                            <span className="text-sm font-black text-white">{system.memory}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-[#161F32] rounded-full overflow-hidden shadow-inner">
                                            <div 
                                                className="h-full bg-gradient-to-r from-red-500 to-pink-500 shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all duration-500"
                                                style={{ width: `${system.memory}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Footer */}
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-4 text-[9px]">
                                        <div>
                                            <p className="text-slate-500 font-bold">Requests</p>
                                            <p className="text-white font-black">{system.requests}</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 font-bold">Accuracy</p>
                                            <p className="text-emerald-400 font-black">{system.accuracy}</p>
                                        </div>
                                    </div>
                                    <div className="text-[10px] bg-[#161F32] px-3 py-1.5 rounded-full border border-white/5 font-bold text-slate-300">
                                        {system.status === 'RUNNING' ? 'RUNNING' : 'PAUSED'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </AppShell>
    );
}
