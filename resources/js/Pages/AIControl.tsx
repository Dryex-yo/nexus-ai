import { Head, Link } from '@inertiajs/react';
import { 
    LayoutDashboard, Bot, BarChart3, Cpu, Settings, 
    User, LogOut, Search, Bell, Zap, Activity, Shield, Pause, Play 
} from 'lucide-react';
import { useState } from 'react';

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
        <div className="flex min-h-screen bg-[#0B1120] text-slate-400 font-sans antialiased">
            <Head title="Nexus AI - AI Control Center" />

            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#0B1224] flex flex-col p-6 overflow-hidden">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 bg-[#00D1FF] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,209,255,0.4)]">
                        <Zap className="text-white fill-current w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="text-white font-black tracking-tighter leading-none text-xl">NEXUS AI</h1>
                        <p className="text-[9px] text-[#00D1FF] font-bold uppercase tracking-[0.2em] mt-1">Robot Management</p>
                    </div>
                </div>

                <nav className="space-y-2 flex-1">
                    {[
                        { icon: LayoutDashboard, label: 'Dashboard', active: false, href: '/dashboard' },
                        { icon: Bot, label: 'Robot Management', active: false, href: '/robot-management' },
                        { icon: BarChart3, label: 'Analytics', active: false, href: '/analytics' },
                        { icon: Cpu, label: 'AI Control', active: true, href: '/ai-control' },
                        { icon: Settings, label: 'Settings', active: false },
                        { icon: User, label: 'Profile', active: false },
                    ].map((item) => (
                        <Link key={item.label} href={item.href || '#'} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${item.active ? 'bg-[#152033] text-[#00D1FF] border border-cyan-500/20 shadow-[0_0_15px_rgba(0,209,255,0.05)]' : 'hover:bg-white/5 text-slate-500'}`}>
                            <item.icon className={`w-5 h-5 ${item.active ? 'text-[#00D1FF]' : ''}`} />
                            <span className="text-sm font-bold tracking-tight">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 cursor-pointer transition-colors group">
                        <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold">Logout</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {/* Header */}
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-2xl font-black text-white tracking-tight">AI Control Center</h2>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">Manage and monitor AI systems</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input type="text" placeholder="Search..." className="bg-[#0D1425] border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:border-[#00D1FF]/50 outline-none w-64 transition-all" />
                        </div>
                        <Bell className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
                        <div className="flex items-center gap-3 border-l border-white/10 pl-6 text-right">
                            <div className="hidden md:block">
                                <p className="text-xs font-black text-white leading-none uppercase tracking-widest">Alex Chen</p>
                                <p className="text-[9px] text-[#00D1FF] font-bold uppercase mt-1.5">System Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#00D1FF] border-2 border-[#0B1120] flex items-center justify-center font-black text-white shadow-lg">A</div>
                        </div>
                    </div>
                </header>

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
        </div>
    );
}
