import { Head, router, Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, Bot, BarChart3, Cpu, Settings, 
    User, LogOut, Search, Bell, Zap, Activity, Shield, MapPin 
} from 'lucide-react';
import { useEffect } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard({ robots, stats, recent_transactions }: any) {
    
    // Perbaikan fungsi dari image_d4c815.jpg
    const toggleMaintenance = (id: number) => {
        router.patch(`/dashboard/robots/${id}/maintenance`, {}, {
            preserveScroll: true, // Pastikan posisi scroll tetap
        });
    };

    useEffect(() => {
        // @ts-ignore
        window.Echo.channel('robots').listen('RobotUpdated', () => {
            router.reload({ 
                only: ['robots', 'stats', 'recent_transactions']
            });
        });
        return () => { // @ts-ignore
            window.Echo.leave('robots'); 
        };
    }, []);

    return (
        /* Warna Background Utama: #0B1120 sesuai image_d4c4d0.png */
        <div className="flex min-h-screen bg-[#0B1120] text-slate-400 font-sans antialiased">
            <Head title="Nexus AI - Robot Management" />

            {/* Sidebar Kiri: #0B1224 */}
            <aside className="w-64 border-r border-white/5 bg-[#0B1224] flex flex-col p-6 overflow-hidden">
                <div className="flex items-center gap-3 mb-10 px-2">
                    {/* Icon dengan Glow Cyan pekat */}
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
                        { icon: LayoutDashboard, label: 'Dashboard', active: true, href: '/dashboard' },
                        { icon: Bot, label: 'Robot Management', active: false, href: '/robot-management' },
                        { icon: BarChart3, label: 'Analytics', active: false, href: '/analytics' },
                        { icon: Cpu, label: 'AI Control', active: false, href: '/ai-control' },
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

            {/* Main Content Area */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Dashboard</h2>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">Advanced AI System</p>
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

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
                    {/* Stats Card - Sesuai Card di image_d4c4d0.png */}
                    {[
                        { label: 'Total Robots', val: '4', sub: '+2 this month', icon: Bot, color: 'text-[#00D1FF]' },
                        { label: 'Online', val: stats.total_online, sub: 'Active now', icon: Activity, color: 'text-emerald-400' },
                        { label: 'Warnings', val: '1', sub: 'Needs attention', icon: Zap, color: 'text-amber-400' },
                        { label: 'Avg Efficiency', val: `${Number(stats.avg_efficiency).toFixed(1)}%`, sub: '+2.3% today', icon: Shield, color: 'text-purple-400' },
                    ].map((s, i) => (
                        <div key={i} className="bg-[#0D1425] border border-white/5 p-6 rounded-[1.25rem] relative hover:border-white/10 transition-all shadow-xl">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{s.label}</p>
                                    <h4 className="text-3xl font-black text-white leading-none tracking-tight">{s.val}</h4>
                                </div>
                                <div className="bg-[#161F32] p-2.5 rounded-xl border border-white/5 shadow-inner">
                                    <s.icon className={`w-5 h-5 ${s.color}`} />
                                </div>
                            </div>
                            <p className={`text-[10px] font-bold ${s.color} flex items-center gap-1`}>{s.sub}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Robot List + Charts */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* System Performance Chart */}
                        <div className="bg-[#0D1425] border border-[#00D1FF]/20 p-6 rounded-[1.25rem] shadow-[0_8px_32px_rgba(0,209,255,0.15)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 via-transparent to-transparent opacity-50" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-sm font-black text-white">System Performance</h3>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Real-time efficiency monitoring</p>
                                    </div>
                                    <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
                                        <Activity className="w-4 h-4 text-slate-500" />
                                    </button>
                                </div>
                                <ResponsiveContainer width="100%" height={280}>
                                    <LineChart data={[
                                        { name: 'Now', efficiency: 92 },
                                        { name: 'Now', efficiency: 94 },
                                        { name: 'Now', efficiency: 95 },
                                        { name: 'Now', efficiency: 97 },
                                        { name: 'Now', efficiency: 96 },
                                        { name: 'Now', efficiency: 98 },
                                        { name: 'Now', efficiency: 97 },
                                    ]}>
                                        <defs>
                                            <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#00D1FF" stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor="#00D1FF" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                        <XAxis dataKey="name" stroke="#64748b" style={{ fontSize: '11px' }} />
                                        <YAxis stroke="#64748b" style={{ fontSize: '11px' }} domain={[85, 100]} />
                                        <Tooltip 
                                            contentStyle={{ backgroundColor: '#0B1120', border: '1px solid rgba(0,209,255,0.2)', borderRadius: '0.5rem' }}
                                            labelStyle={{ color: '#fff' }}
                                        />
                                        <Line 
                                            type="monotone" 
                                            dataKey="efficiency" 
                                            stroke="#00D1FF" 
                                            strokeWidth={3}
                                            dot={false}
                                            fill="url(#colorEfficiency)"
                                            isAnimationActive={true}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Robot List */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center mb-2 px-2">
                                <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.25em]">Robot Status Overview</h3>
                                <button className="text-[10px] font-bold text-[#00D1FF] hover:underline">View All</button>
                            </div>
                            
                            {robots.map((robot: any) => (
                                <div key={robot.id} className="bg-[#0D1425] border border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:bg-[#11192C] transition-all duration-300">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#161F32] rounded-xl flex items-center justify-center border border-white/5 group-hover:border-white/10">
                                            <Bot className="w-6 h-6 text-[#00D1FF]/70" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-black text-white">{robot.name}</h4>
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                            </div>
                                            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1 italic">{robot.model}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-12">
                                        <div className="hidden md:block">
                                            <p className="text-[9px] font-bold text-slate-500 uppercase mb-2">Battery Status</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-24 h-2 bg-[#161F32] rounded-full overflow-hidden shadow-inner">
                                                    <div className="h-full bg-[#00D1FF] shadow-[0_0_12px_rgba(0,209,255,0.6)] transition-all duration-1000" style={{ width: `${robot.battery}%` }} />
                                                </div>
                                                <span className="text-[10px] font-black text-slate-300">{robot.battery}%</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Operational Area</p>
                                            <div className="flex items-center gap-1.5 justify-end">
                                                <MapPin className="w-3 h-3 text-red-500 fill-red-500/20" />
                                                <span className="text-xs font-bold text-white">{robot.location}</span>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => toggleMaintenance(robot.id)}
                                            className="px-6 py-2.5 rounded-xl bg-[#161F32] border border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:border-[#00D1FF]/50 hover:text-[#00D1FF] hover:bg-[#1c2841] transition-all shadow-lg active:scale-95"
                                        >
                                            {robot.status === 'MAINTENANCE' ? 'Resume' : 'Maintain'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Charts and Activity */}
                    <div className="space-y-8">
                        {/* Task Distribution Chart */}
                        <div className="bg-[#0D1425] border border-[#00D1FF]/20 rounded-[1.25rem] p-6 shadow-[0_8px_32px_rgba(0,209,255,0.15)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-50" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-sm font-black text-white">Task Distribution</h3>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Current assignments</p>
                                    </div>
                                </div>
                                <ResponsiveContainer width="100%" height={240}>
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: 'Assembly', value: 35, fill: '#A78BFA' },
                                                { name: 'Quality', value: 25, fill: '#00D1FF' },
                                                { name: 'Logistics', value: 20, fill: '#FF1493' },
                                                { name: 'Processing', value: 15, fill: '#10B981' },
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={85}
                                            paddingAngle={3}
                                            dataKey="value"
                                            isAnimationActive={true}
                                        >
                                            <Cell fill="#A78BFA" />
                                            <Cell fill="#00D1FF" />
                                            <Cell fill="#FF1493" />
                                            <Cell fill="#10B981" />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="mt-6 space-y-3">
                                    {[
                                        { label: 'Assembly', value: '35%', color: 'bg-purple-400' },
                                        { label: 'Quality', value: '25%', color: 'bg-[#00D1FF]' },
                                        { label: 'Logistics', value: '20%', color: 'bg-pink-500' },
                                        { label: 'Processing', value: '15%', color: 'bg-emerald-500' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center text-[10px]">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
                                                <span className="text-slate-300 font-semibold">{item.label}</span>
                                            </div>
                                            <span className="text-white font-black">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* System Activity Panel */}
                        <div className="bg-[#0D1425] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                            {/* Subtle background glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00D1FF]/5 blur-[80px] rounded-full" />
                            
                            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-10 border-b border-white/5 pb-4">System Activity</h3>
                            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-white/5">
                                {recent_transactions.map((tx: any) => (
                                    <div key={tx.id} className="relative pl-8 group">
                                        <div className="absolute left-0 top-1.5 w-[15px] h-[15px] bg-[#0B1120] border-[2px] border-slate-700 rounded-full z-10 group-hover:border-[#00D1FF] group-hover:shadow-[0_0_8px_#00D1FF] transition-all duration-300" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-200 leading-tight mb-1 group-hover:text-white transition-colors">{tx.description}</p>
                                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">
                                                {tx.robot?.name} • 2H AGO
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}