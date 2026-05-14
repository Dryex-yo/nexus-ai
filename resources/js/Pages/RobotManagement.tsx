import { Head, router, Link } from '@inertiajs/react';
import {
    LayoutDashboard, Bot, BarChart3, Cpu, Settings,
    User, LogOut, Search, Bell, Zap, Activity, Shield, MapPin,
    Edit2, Trash2, Eye, Download
} from 'lucide-react';
import { useState } from 'react';

export default function RobotManagement({ robots, stats }: any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const statusOptions = [
        { label: 'All', count: robots.length, color: '' },
        { label: 'Online', count: robots.filter((r: any) => r.status === 'ONLINE').length, color: 'text-emerald-400' },
        { label: 'Warning', count: robots.filter((r: any) => r.status === 'WARNING').length, color: 'text-amber-400' },
        { label: 'Offline', count: robots.filter((r: any) => r.status === 'OFFLINE').length, color: 'text-red-400' },
        { label: 'Maintenance', count: robots.filter((r: any) => r.status === 'MAINTENANCE').length, color: 'text-blue-400' },
    ];

    const filteredRobots = robots.filter((robot: any) => {
        const matchesSearch = robot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            robot.model.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All' || robot.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ONLINE':
                return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
            case 'WARNING':
                return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
            case 'OFFLINE':
                return 'bg-red-500/20 text-red-400 border-red-500/30';
            case 'MAINTENANCE':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            default:
                return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'ONLINE':
                return '● ';
            case 'WARNING':
                return '⚠ ';
            case 'OFFLINE':
                return '⊚ ';
            case 'MAINTENANCE':
                return '⚙ ';
            default:
                return '○ ';
        }
    };

    const handleExport = () => {
        // Create CSV content
        const headers = ['Robot Name', 'Model', 'Status', 'Battery', 'Efficiency', 'Location', 'Task'];
        const csvContent = [
            headers.join(','),
            ...filteredRobots.map((robot: any) =>
                [robot.name, robot.model, robot.status, `${robot.battery}%`, `${robot.efficiency}%`, robot.location, robot.task || 'N/A'].join(',')
            )
        ].join('\n');

        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'robots.csv';
        a.click();
    };

    const handleRefresh = () => {
        router.reload();
    };

    return (
        <div className="flex min-h-screen bg-[#0B1120] text-slate-400 font-sans antialiased">
            <Head title="Robot Management - Nexus AI" />

            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#0B1224] flex flex-col p-6 overflow-hidden">
                <Link href="/dashboard">
                    <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 bg-[#00D1FF] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,209,255,0.4)]">
                            <Zap className="text-white fill-current w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-white font-black tracking-tighter leading-none text-xl">NEXUS AI</h1>
                            <p className="text-[9px] text-[#00D1FF] font-bold uppercase tracking-[0.2em] mt-1">Robot Management</p>
                        </div>
                    </div>
                </Link>

                <nav className="space-y-2 flex-1">
                    {[
                        { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: false },
                        { icon: Bot, label: 'Robot Management', href: '/robot-management', active: true },
                        { icon: BarChart3, label: 'Analytics', active: false },
                        { icon: Cpu, label: 'AI Control', active: false },
                        { icon: Settings, label: 'Settings', active: false },
                        { icon: User, label: 'Profile', href: '/profile', active: false },
                    ].map((item) => (
                        <Link key={item.label} href={item.href || '#'}>
                            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${item.active ? 'bg-[#152033] text-[#00D1FF] border border-cyan-500/20 shadow-[0_0_15px_rgba(0,209,255,0.05)]' : 'hover:bg-white/5 text-slate-500'}`}>
                                <item.icon className={`w-5 h-5 ${item.active ? 'text-[#00D1FF]' : ''}`} />
                                <span className="text-sm font-bold tracking-tight">{item.label}</span>
                            </div>
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
                        <h2 className="text-2xl font-black text-white tracking-tight">Robot Management</h2>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">Advanced AI System</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search robots..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-[#0D1425] border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:border-[#00D1FF]/50 outline-none w-64 transition-all"
                            />
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

                {/* Filter Tabs */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-4">
                        {statusOptions.map((option) => (
                            <button
                                key={option.label}
                                onClick={() => setStatusFilter(option.label)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${statusFilter === option.label
                                    ? 'bg-[#00D1FF]/20 border border-[#00D1FF] text-[#00D1FF] shadow-[0_0_15px_rgba(0,209,255,0.3)]'
                                    : 'border border-white/10 text-slate-400 hover:border-white/20'
                                    }`}
                            >
                                {option.label} ({option.count})
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={handleRefresh}
                            className="p-2.5 rounded-xl bg-[#0D1425] border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 px-4"
                        >
                            <Activity className="w-4 h-4" />
                            <span className="text-xs font-bold">Refresh</span>
                        </button>
                        <button
                            onClick={handleExport}
                            className="p-2.5 rounded-xl bg-[#0D1425] border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 px-4"
                        >
                            <Download className="w-4 h-4" />
                            <span className="text-xs font-bold">Export</span>
                        </button>
                        <button className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all flex items-center gap-2 px-4">
                            <Zap className="w-4 h-4" />
                            Add Robot
                        </button>
                    </div>
                </div>

                {/* Robots Table */}
                <div className="bg-[#0D1425] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/5 bg-[#161F32]">
                                <th className="px-6 py-4 text-left text-[9px] font-black text-slate-500 uppercase tracking-widest">Robot</th>
                                <th className="px-6 py-4 text-left text-[9px] font-black text-slate-500 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-left text-[9px] font-black text-slate-500 uppercase tracking-widest">Battery</th>
                                <th className="px-6 py-4 text-left text-[9px] font-black text-slate-500 uppercase tracking-widest">Efficiency</th>
                                <th className="px-6 py-4 text-left text-[9px] font-black text-slate-500 uppercase tracking-widest">Location</th>
                                <th className="px-6 py-4 text-left text-[9px] font-black text-slate-500 uppercase tracking-widest">Task</th>
                                <th className="px-6 py-4 text-left text-[9px] font-black text-slate-500 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRobots.map((robot: any) => (
                                <tr key={robot.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-200 group">
                                    {/* Robot Name */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-[#161F32] rounded-lg flex items-center justify-center border border-white/5 group-hover:border-white/10">
                                                <Bot className="w-5 h-5 text-[#00D1FF]/70" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <p className="text-sm font-black text-white">{robot.name}</p>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                                </div>
                                                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest italic">{robot.model}</p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border ${getStatusColor(robot.status)}`}>
                                            {getStatusIcon(robot.status)}{robot.status}
                                        </span>
                                    </td>

                                    {/* Battery */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-20 h-2 bg-[#161F32] rounded-full overflow-hidden shadow-inner">
                                                <div
                                                    className="h-full bg-[#00D1FF] shadow-[0_0_12px_rgba(0,209,255,0.6)] transition-all duration-1000"
                                                    style={{ width: `${robot.battery}%` }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-black text-slate-300 min-w-[2rem]">{robot.battery}%</span>
                                        </div>
                                    </td>

                                    {/* Efficiency */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <Activity className="w-3 h-3 text-purple-400" />
                                            <span className="text-xs font-black text-white">{robot.efficiency}%</span>
                                        </div>
                                    </td>

                                    {/* Location */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3 h-3 text-red-500 fill-red-500/20" />
                                            <span className="text-xs font-bold text-white">{robot.location}</span>
                                        </div>
                                    </td>

                                    {/* Task */}
                                    <td className="px-6 py-5">
                                        <span className="text-xs font-semibold text-slate-300">{robot.task || 'Idle'}</span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-[#00D1FF]/20 rounded-lg transition-all text-[#00D1FF]/70 hover:text-[#00D1FF]">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-blue-500/20 rounded-lg transition-all text-blue-400/70 hover:text-blue-400">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-red-500/20 rounded-lg transition-all text-red-400/70 hover:text-red-400">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Empty State */}
                    {filteredRobots.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-12">
                            <Bot className="w-12 h-12 text-slate-600 mb-4" />
                            <p className="text-slate-500 text-sm font-semibold">No robots found</p>
                            <p className="text-slate-600 text-xs">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>

                {/* Footer Info */}
                <div className="mt-6 flex justify-between items-center text-[9px] text-slate-500 font-semibold">
                    <p>Showing {filteredRobots.length} of {robots.length} robots</p>
                    <p>© 2026 NEXUS AI • Automatic Robot Management System</p>
                </div>
            </main>
        </div>
    );
}
