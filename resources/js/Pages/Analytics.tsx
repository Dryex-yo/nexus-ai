import { Head, Link } from '@inertiajs/react';
import {
    LayoutDashboard, Bot, BarChart3, Cpu, Settings,
    User, LogOut, Bell, Zap, Activity, Shield, TrendingUp, Zap as ZapIcon
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TopHeader from '@/Components/TopHeader';

export default function Analytics({ stats, efficiency_trend, task_completion }: any) {
    
    return (
        <div className="flex min-h-screen bg-[#0B1120] text-slate-400 font-sans antialiased">
            <Head title="Nexus AI - Analytics" />

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
                        { icon: BarChart3, label: 'Analytics', active: true, href: '/analytics' },
                        { icon: Cpu, label: 'AI Control', active: false, href: '/ai-control' },
                        { icon: Settings, label: 'Settings', active: false, href: '/settings' },
                        { icon: User, label: 'Profile', active: false, href: '/profile' },
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
                <TopHeader title="Analytics" subtitle="Advanced AI System" searchPlaceholder="Search metrics, robots, or tasks..." />

                {/* Analytics Overview - Header */}
                <div className="mb-8">
                    <h3 className="text-lg font-black text-white tracking-tight mb-6">Analytics Overview</h3>
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-6">Performance metrics and insights</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: 'Total Tasks Completed', val: stats.total_tasks_completed, sub: '+12.5% vs last period', icon: Activity, color: 'text-emerald-400' },
                        { label: 'Average Uptime', val: `${stats.avg_uptime}%`, sub: '+0.8% improvement', icon: TrendingUp, color: 'text-cyan-400' },
                        { label: 'Active Robots', val: stats.active_robots, sub: `${stats.in_maintenance} in maintenance`, icon: Bot, color: 'text-purple-400' },
                        { label: 'Energy Saved', val: `${stats.energy_saved} kWh`, sub: '+18% efficiency', icon: ZapIcon, color: 'text-amber-400' },
                    ].map((s, i) => (
                        <div key={i} className="bg-[#0D1425] border border-white/5 p-6 rounded-[1.25rem] relative hover:border-white/10 transition-all shadow-xl">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">{s.label}</p>
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

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Efficiency Trend Chart */}
                    <div className="bg-[#0D1425] border border-[#00D1FF]/20 p-6 rounded-[1.25rem] shadow-[0_8px_32px_rgba(0,209,255,0.15)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 via-transparent to-transparent opacity-50" />
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-sm font-black text-white">Efficiency Trend</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Actual vs Target performance</p>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={efficiency_trend}>
                                    <defs>
                                        <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00D1FF" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#00D1FF" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                    <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '11px' }} />
                                    <YAxis stroke="#64748b" style={{ fontSize: '11px' }} domain={[85, 100]} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#0B1120', border: '1px solid rgba(0,209,255,0.2)', borderRadius: '0.5rem' }}
                                        labelStyle={{ color: '#fff' }}
                                    />
                                    <Legend />
                                    <Line 
                                        type="monotone" 
                                        dataKey="actual" 
                                        stroke="#00D1FF" 
                                        strokeWidth={3}
                                        dot={false}
                                        fill="url(#colorActual)"
                                        isAnimationActive={true}
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="target" 
                                        stroke="#64748b" 
                                        strokeWidth={2}
                                        strokeDasharray="5 5"
                                        dot={false}
                                        isAnimationActive={true}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Task Completion Rate Chart */}
                    <div className="bg-[#0D1425] border border-[#00D1FF]/20 rounded-[1.25rem] p-6 shadow-[0_8px_32px_rgba(0,209,255,0.15)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-50" />
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-sm font-black text-white">Task Completion Rate</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Hourly distribution</p>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={task_completion}>
                                    <defs>
                                        <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#A78BFA" stopOpacity={1}/>
                                            <stop offset="100%" stopColor="#7C3AED" stopOpacity={0.6}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                                    <XAxis dataKey="hour" stroke="#64748b" style={{ fontSize: '11px' }} />
                                    <YAxis stroke="#64748b" style={{ fontSize: '11px' }} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#0B1120', border: '1px solid rgba(0,209,255,0.2)', borderRadius: '0.5rem' }}
                                        labelStyle={{ color: '#fff' }}
                                    />
                                    <Bar 
                                        dataKey="completed" 
                                        fill="url(#colorBar)"
                                        isAnimationActive={true}
                                        radius={[8, 8, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
