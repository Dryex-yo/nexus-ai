import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    LayoutDashboard, Bot, BarChart3, Cpu, Settings as SettingsIcon,
    User, LogOut, Search, Bell, Moon, Globe, Clock3, ToggleRight
} from 'lucide-react';

export default function Settings() {
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('English');
    const [timezone, setTimezone] = useState('UTC');
    const [pushNotifications, setPushNotifications] = useState(true);
    const [soundEffects, setSoundEffects] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#0B1120] text-slate-400 font-sans antialiased">
            <Head title="Nexus AI - Settings" />

            <aside className="w-64 border-r border-white/5 bg-[#0B1224] flex flex-col p-6 overflow-hidden">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 bg-[#00D1FF] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,209,255,0.4)]">
                        <SettingsIcon className="text-white fill-current w-5 h-5" />
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
                        { icon: SettingsIcon, label: 'Settings', active: true, href: '/settings' },
                        { icon: User, label: 'Profile', active: false, href: '/profile' },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href || '#'}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${item.active ? 'bg-[#152033] text-[#00D1FF] border border-cyan-500/20 shadow-[0_0_15px_rgba(0,209,255,0.05)]' : 'hover:bg-white/5 text-slate-500'}`}
                        >
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

            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Settings</h2>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">Advanced AI System</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search settings..."
                                className="bg-[#0D1425] border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:border-[#00D1FF]/50 outline-none w-64 transition-all"
                            />
                        </div>
                        <Bell className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
                        <div className="flex items-center gap-3 border-l border-white/10 pl-6 text-right">
                            <div className="hidden md:block">
                                <p className="text-xs font-black text-white leading-none uppercase tracking-widest">Alex Chen</p>
                                <p className="text-[9px] text-[#00D1FF] font-bold uppercase mt-1.5">System Administrator</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#00D1FF] border-2 border-[#0B1120] flex items-center justify-center font-black text-white shadow-lg">A</div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-[#0D1425] border border-[#00D1FF]/20 rounded-[1.5rem] p-8 shadow-[0_20px_60px_rgba(0,209,255,0.08)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/10 via-transparent to-transparent opacity-50" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-3xl bg-[#11192C] flex items-center justify-center border border-white/10 shadow-inner">
                                        <SettingsIcon className="w-6 h-6 text-[#00D1FF]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white">General Settings</h3>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-2">Basic system configuration</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-col gap-3 p-6 rounded-3xl border border-white/5 bg-[#11192C] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-2xl bg-[#1E2A42] flex items-center justify-center border border-white/10">
                                                <Moon className="w-5 h-5 text-[#00D1FF]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-white">Dark Mode</p>
                                                <p className="text-[10px] text-slate-500">Use dark theme for the interface</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setDarkMode((current) => !current)}
                                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${darkMode ? 'bg-[#00D1FF] text-[#0B1120]' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                                        >
                                            <ToggleRight className="w-4 h-4" />
                                            {darkMode ? 'Enabled' : 'Disabled'}
                                        </button>
                                    </div>

                                    <div className="flex flex-col gap-3 p-6 rounded-3xl border border-white/5 bg-[#11192C] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-2xl bg-[#1E2A42] flex items-center justify-center border border-white/10">
                                                <Globe className="w-5 h-5 text-[#00D1FF]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-white">Language</p>
                                                <p className="text-[10px] text-slate-500">Select your preferred language</p>
                                            </div>
                                        </div>
                                        <select
                                            value={language}
                                            onChange={(event) => setLanguage(event.target.value)}
                                            className="w-full rounded-2xl border border-white/10 bg-[#0D1425] px-4 py-3 text-sm text-white outline-none focus:border-[#00D1FF]/50"
                                        >
                                            <option>English</option>
                                            <option>Bahasa Indonesia</option>
                                            <option>日本語</option>
                                            <option>中文</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-3 p-6 rounded-3xl border border-white/5 bg-[#11192C] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-2xl bg-[#1E2A42] flex items-center justify-center border border-white/10">
                                                <Clock3 className="w-5 h-5 text-[#00D1FF]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-white">Timezone</p>
                                                <p className="text-[10px] text-slate-500">Set your local timezone</p>
                                            </div>
                                        </div>
                                        <select
                                            value={timezone}
                                            onChange={(event) => setTimezone(event.target.value)}
                                            className="w-full rounded-2xl border border-white/10 bg-[#0D1425] px-4 py-3 text-sm text-white outline-none focus:border-[#00D1FF]/50"
                                        >
                                            <option>UTC</option>
                                            <option>GMT+1</option>
                                            <option>GMT+7</option>
                                            <option>PST</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0D1425] border border-white/10 rounded-[1.5rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-3xl bg-[#11192C] flex items-center justify-center border border-white/10 shadow-inner">
                                    <Bell className="w-6 h-6 text-[#00D1FF]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-white">Notifications</h3>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-2">Alert and notification preferences</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-col gap-3 p-6 rounded-3xl border border-white/5 bg-[#11192C] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-black text-white">Push Notifications</p>
                                            <p className="text-[10px] text-slate-500">Receive real-time alerts</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setPushNotifications((current) => !current)}
                                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${pushNotifications ? 'bg-[#00D1FF] text-[#0B1120]' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                                        >
                                            <ToggleRight className="w-4 h-4" />
                                            {pushNotifications ? 'On' : 'Off'}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 p-6 rounded-3xl border border-white/5 bg-[#11192C] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-black text-white">Sound Effects</p>
                                            <p className="text-[10px] text-slate-500">Play sounds for notifications</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setSoundEffects((current) => !current)}
                                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${soundEffects ? 'bg-[#00D1FF] text-[#0B1120]' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                                        >
                                            <ToggleRight className="w-4 h-4" />
                                            {soundEffects ? 'On' : 'Off'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-[#0D1425] border border-[#00D1FF]/20 rounded-[1.5rem] p-8 shadow-[0_20px_60px_rgba(0,209,255,0.08)] overflow-hidden">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-5">Configuration Summary</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Theme', value: darkMode ? 'Dark Mode' : 'Light Mode' },
                                    { label: 'Language', value: language },
                                    { label: 'Timezone', value: timezone },
                                    { label: 'Push Alerts', value: pushNotifications ? 'Enabled' : 'Disabled' },
                                    { label: 'Sound', value: soundEffects ? 'Enabled' : 'Disabled' },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center justify-between gap-3 rounded-3xl border border-white/5 bg-[#11192C] p-4">
                                        <p className="text-sm text-slate-300">{item.label}</p>
                                        <p className="text-sm font-black text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#0D1425] border border-white/10 rounded-[1.5rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-6">Need help?</h3>
                            <p className="text-sm text-slate-400 leading-7">If you need an update to your system settings, reach out to support or review the advanced configuration documents.</p>
                            <button className="mt-8 w-full rounded-3xl bg-[#00D1FF] px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-[#0B1120] transition-all hover:bg-[#00b5ff]">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
