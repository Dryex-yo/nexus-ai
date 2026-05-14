import { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    LayoutDashboard,
    Bot,
    BarChart3,
    Cpu,
    Settings,
    User,
    LogOut,
    Zap,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Bot, label: 'Robot Management', href: '/robot-management' },
    { icon: BarChart3, label: 'Analytics', href: '/analytics' },
    { icon: Cpu, label: 'AI Control', href: '/ai-control' },
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: User, label: 'Profile', href: '/profile' },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const activePath = typeof window !== 'undefined' ? window.location.pathname : '/dashboard';
    const logoutHref = typeof window !== 'undefined' && (window as any).route ? (window as any).route('logout') : '/logout';

    return (
        <aside className={`flex flex-col ${collapsed ? 'w-20' : 'w-72'} border-r border-white/5 bg-[#0B1224] text-slate-300 transition-all duration-300`}>
            <div className="flex items-center gap-3 px-5 py-6 border-b border-white/5">
                <div className="h-14 w-14 rounded-3xl bg-[#00D1FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,209,255,0.3)]">
                    <Zap className="h-6 w-6 text-white" />
                </div>
                {!collapsed && (
                    <div>
                        <p className="text-sm font-black text-white">NEXUS AI</p>
                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#00D1FF]">Robot Management</p>
                    </div>
                )}
            </div>

            <nav className="flex-1 space-y-2 px-3 py-6">
                {navItems.map((item) => {
                    const isActive = activePath === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                                isActive
                                    ? 'bg-[#152033] text-[#00D1FF] border border-cyan-500/20 shadow-[0_0_30px_rgba(0,209,255,0.12)]'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            <Icon className={`h-5 w-5 ${isActive ? 'text-[#00D1FF]' : 'text-slate-400 group-hover:text-white'}`} />
                            {!collapsed && <span>{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-white/10 p-4">
                <button
                    type="button"
                    onClick={() => setCollapsed((value) => !value)}
                    className="group flex w-full items-center justify-between gap-3 rounded-3xl border border-white/10 bg-[#081226] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                >
                    <span className="flex items-center gap-2">
                        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                        {!collapsed && (collapsed ? 'Expand' : 'Collapse')}
                    </span>
                    {!collapsed && <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Ctrl</span>}
                </button>

                <Link
                    href={logoutHref}
                    method="post"
                    as="button"
                    className="mt-4 flex w-full items-center gap-3 rounded-3xl border border-white/10 bg-[#081226] px-4 py-3 text-sm font-semibold text-rose-400 transition hover:border-rose-400/20 hover:text-white hover:bg-white/5"
                >
                    <LogOut className="h-5 w-5" />
                    {!collapsed && <span>Logout</span>}
                </Link>
            </div>
        </aside>
    );
}
