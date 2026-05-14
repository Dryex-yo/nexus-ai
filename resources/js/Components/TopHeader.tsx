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

    const displayName = user?.name || 'Dery Supriyadi';
    const role = user?.role || 'System Admin';
    const initial = displayName.charAt(0).toUpperCase();

    return (
        <header className="mb-10">
            <div className="rounded-[1.75rem] border border-white/5 bg-[#152033]/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#00D1FF]">
                            NEXUS AI
                        </p>
                        <h1 className="mt-3 text-3xl font-black text-white tracking-tight">{title}</h1>
                        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
                        <div className="relative w-full sm:w-[360px]">
                            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                            <input
                                type="text"
                                value={value}
                                onChange={handleSearchChange}
                                placeholder={searchPlaceholder}
                                className="w-full rounded-full border border-white/5 bg-[#152033]/50 py-3 pl-12 pr-4 text-sm font-semibold text-white placeholder:text-slate-500 outline-none transition focus:border-[#00D1FF]/50"
                            />
                        </div>

                        <button
                            type="button"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/5 bg-[#152033]/60 text-slate-300 transition hover:border-[#00D1FF]/30 hover:text-white"
                            aria-label="Notifications"
                        >
                            <Bell className="h-5 w-5" />
                        </button>

                        <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#09101F] px-4 py-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-white shadow-[0_0_20px_rgba(0,209,255,0.25)]">
                                {initial}
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm font-black text-white leading-tight">{displayName}</p>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#00D1FF]">{role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
