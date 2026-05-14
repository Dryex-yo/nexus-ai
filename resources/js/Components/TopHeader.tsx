import { Bell, Search } from 'lucide-react';
import { usePage } from '@inertiajs/react';
import { useState, type ChangeEvent } from 'react';

interface TopHeaderProps {
    title: string;
    subtitle?: string;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
}

export default function TopHeader({
    title,
    subtitle = 'Advanced AI System',
    searchPlaceholder = 'Search...',
    searchValue,
    onSearchChange,
}: TopHeaderProps) {
    const user = usePage().props.auth?.user as any;
    const [query, setQuery] = useState('');
    const value = searchValue !== undefined ? searchValue : query;

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const nextQuery = event.target.value;
        if (onSearchChange) {
            onSearchChange(nextQuery);
        } else {
            setQuery(nextQuery);
        }
    };

    const role =
        user?.role ||
        user?.profile?.role ||
        user?.job_title ||
        'System Administrator';
    const initial = user?.name?.charAt(0).toUpperCase() || 'A';

    return (
        <header className="mb-10">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0D1425] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#00D1FF]">
                            NEXUS AI
                        </p>
                        <h1 className="mt-3 text-3xl font-black text-white tracking-tight">{title}</h1>
                        <p className="mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
                        <div className="relative w-full sm:w-[320px]">
                            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                            <input
                                type="text"
                                value={value}
                                onChange={handleSearchChange}
                                placeholder={searchPlaceholder}
                                className="w-full rounded-full border border-white/10 bg-[#0B1120] py-3 pl-12 pr-4 text-xs font-semibold text-white placeholder:text-slate-500 outline-none transition focus:border-[#00D1FF]/50"
                            />
                        </div>

                        <button
                            type="button"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1120] text-slate-300 transition hover:border-[#00D1FF]/30 hover:text-white"
                            aria-label="Notifications"
                        >
                            <Bell className="h-5 w-5" />
                        </button>

                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#09101F] px-4 py-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00D1FF] text-sm font-black text-white shadow-lg">
                                {initial}
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-xs font-black uppercase tracking-[0.35em] text-white">{user?.name || 'Guest'}</p>
                                <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#00D1FF] mt-1">{role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
