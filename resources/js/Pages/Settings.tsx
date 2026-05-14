import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    LayoutDashboard, Bot, BarChart3, Cpu, Settings as SettingsIcon,
    User, LogOut, Bell, Moon, Globe, Clock3, ToggleRight
} from 'lucide-react';
import AppShell from '@/Layouts/AppShell';

export default function Settings() {
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('English');
    const [timezone, setTimezone] = useState('UTC');
    const [pushNotifications, setPushNotifications] = useState(true);
    const [soundEffects, setSoundEffects] = useState(false);

    return (
        <AppShell title="Settings" subtitle="Advanced AI System" searchPlaceholder="Search settings, preferences, or themes...">
            <Head title="Nexus AI - Settings" />

            <main className="flex-1 p-8 overflow-y-auto">

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
        </AppShell>
    );
}
