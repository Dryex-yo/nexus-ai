import { Head, Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    Bot,
    BarChart3,
    Cpu,
    Settings,
    User,
    LogOut,
    Bell,
    ShieldCheck,
    CalendarDays,
    Sparkles,
    ArrowRight,
    Edit3,
} from 'lucide-react';
import TopHeader from '@/Components/TopHeader';

export default function Edit() {
    const user = usePage().props.auth.user as any;
    const joinDate = user?.created_at
        ? new Date(user.created_at).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
          })
        : 'Jan 2024';
    const emailVerified = user?.email_verified_at !== null;

    const activities = [
        { label: 'Updated robot configuration', time: '2 hours ago' },
        { label: 'Generated analytics report', time: '5 hours ago' },
        { label: 'Modified system settings', time: '1 day ago' },
        { label: 'Received security alert', time: '2 days ago' },
    ];

    const summary = [
        { label: 'Role', value: 'System Administrator' },
        { label: 'Email', value: user?.email || 'nexus@example.com' },
        { label: 'Joined', value: joinDate },
        { label: 'Status', value: 'Verified' },
    ];

    const securityItems = [
        { label: 'Two-factor authentication enabled', active: true },
        { label: 'Device trust verified', active: true },
        { label: 'Encrypted communication active', active: true },
    ];

    return (
        <div className="flex min-h-screen bg-[#0B1120] text-slate-300 font-sans antialiased">
            <Head title="Nexus AI - Profile" />

            <aside className="w-64 border-r border-white/5 bg-[#0B1224] flex flex-col p-6 overflow-hidden">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 bg-[#00D1FF] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,209,255,0.4)]">
                        <Sparkles className="text-white fill-current w-5 h-5" />
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
                        { icon: Cpu, label: 'AI Control', active: false, href: '/ai-control' },
                        { icon: Settings, label: 'Settings', active: false, href: '/settings' },
                        { icon: User, label: 'Profile', active: true, href: '/profile' },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href || '#'}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                item.active
                                    ? 'bg-[#152033] text-[#00D1FF] border border-cyan-500/20 shadow-[0_0_15px_rgba(0,209,255,0.05)]'
                                    : 'hover:bg-white/5 text-slate-500'
                            }`}
                        >
                            <item.icon className={`w-5 h-5 ${item.active ? 'text-[#00D1FF]' : ''}`} />
                            <span className="text-sm font-bold tracking-tight">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 rounded-xl transition-colors w-full"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="text-sm font-bold">Logout</span>
                    </Link>
                </div>
            </aside>

            <main className="flex-1 p-8 overflow-y-auto">
                <TopHeader title="Profile" subtitle="Your account overview and settings" searchPlaceholder="Search your profile settings..." />

                <div className="grid gap-8">
                    <div className="bg-[#0D1425] border border-[#00D1FF]/20 rounded-[1.5rem] p-8 shadow-[0_20px_60px_rgba(0,209,255,0.08)] overflow-hidden relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,209,255,0.2),_transparent_30%)] opacity-60 pointer-events-none" />
                        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#6366F1] to-[#00D1FF] shadow-[0_20px_50px_rgba(0,209,255,0.2)] flex items-center justify-center text-4xl font-black text-white">
                                    {user?.name?.charAt(0).toUpperCase() || 'A'}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00D1FF]">System Administrator</p>
                                    <h1 className="mt-4 text-3xl font-black text-white tracking-tight">{user?.name || 'Alex Chen'}</h1>
                                    <p className="mt-3 text-sm text-slate-400">{user?.email || 'alex@example.com'}</p>
                                    <div className="mt-4 flex flex-wrap items-center gap-3">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[#00D1FF]">
                                            <ShieldCheck className="w-3.5 h-3.5 text-[#00D1FF]" /> Verified
                                        </span>
                                        <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">Joined {joinDate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00D1FF] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B1120] shadow-lg transition hover:bg-[#00b5f6]">
                                    <Edit3 className="w-4 h-4" /> Edit
                                </button>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#11192C] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-300 transition hover:border-[#00D1FF]/50 hover:text-[#00D1FF]"
                                >
                                    <LogOut className="w-4 h-4" /> Logout
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-[1.65fr_1fr] gap-8">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: 'Actions', value: '156', description: 'System actions', color: 'text-[#00D1FF]' },
                                    { label: 'Robots Managed', value: '6', description: 'Active units', color: 'text-[#A78BFA]' },
                                    { label: 'Uptime', value: '100%', description: 'Operational', color: 'text-emerald-400' },
                                    { label: '2FA', value: 'Enabled', description: 'Secure access', color: 'text-amber-400' },
                                ].map((item) => (
                                    <div key={item.label} className="rounded-[1.5rem] border border-white/5 bg-[#0D1425] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-500 mb-4">{item.label}</p>
                                        <div className="flex items-end justify-between gap-3">
                                            <div>
                                                <p className="text-3xl font-black text-white tracking-tight">{item.value}</p>
                                                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">{item.description}</p>
                                            </div>
                                            <div className={`w-11 h-11 rounded-3xl bg-[#11192C] flex items-center justify-center border border-white/10 shadow-inner`}>
                                                <span className={`text-lg ${item.color}`}>•</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-[1.5rem] border border-white/5 bg-[#0D1425] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">Recent Activity</h3>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.35em] mt-1">Latest system events</p>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#00D1FF]">Live</span>
                                </div>
                                <div className="space-y-4">
                                    {activities.map((activity) => (
                                        <div key={activity.label} className="rounded-3xl border border-white/10 bg-[#11192C] p-4 transition hover:border-[#00D1FF]/30">
                                            <p className="text-sm font-semibold text-white">{activity.label}</p>
                                            <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">{activity.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-[1.5rem] border border-[#00D1FF]/20 bg-[#0D1425] p-6 shadow-[0_20px_60px_rgba(0,209,255,0.08)]">
                                <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-6">Account Summary</h3>
                                <div className="space-y-4">
                                    {summary.map((item) => (
                                        <div key={item.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#11192C] px-5 py-4">
                                            <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{item.label}</span>
                                            <span className="text-sm font-black text-white">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[1.5rem] border border-white/5 bg-[#0D1425] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                                <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-6">Security Status</h3>
                                <div className="space-y-3">
                                    {securityItems.map((item) => (
                                        <div key={item.label} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#11192C] p-4">
                                            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl ${item.active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'}`}>
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                            <div>
                                                <p className="text-sm font-semibold text-white">{item.label}</p>
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">{item.active ? 'Active' : 'Inactive'}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
