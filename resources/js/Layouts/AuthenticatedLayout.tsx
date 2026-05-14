import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { Bell, Zap } from 'lucide-react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const displayName = user?.name || 'Dery Supriyadi';

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-300">
            <nav className="border-b border-white/5 bg-[#0B1224] shadow-[0_0_30px_rgba(0,0,0,0.35)]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#00D1FF] shadow-[0_0_20px_rgba(0,209,255,0.3)]">
                            <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-base font-black text-white tracking-tight">NEXUS AI</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8BE7FF]">Robot Management</p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-3 sm:flex">
                        <NavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            href={route('profile.edit')}
                            active={route().current('profile.edit')}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                        >
                            Profile
                        </NavLink>
                        <div className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-[#09101F] px-4 py-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-white shadow-[0_0_20px_rgba(0,209,255,0.25)]">
                                {displayName.charAt(0).toUpperCase()}
                            </div>
                            <div className="hidden min-w-[150px] flex-col sm:flex">
                                <p className="text-sm font-black text-white leading-tight">{displayName}</p>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#00D1FF]">System Admin</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState,
                                )
                            }
                            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-[#09101F] p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                        >
                            <Bell className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="space-y-1 border-t border-white/10 px-4 py-3">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('profile.edit')}>
                            Profile
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route('logout')}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="border-b border-white/5 bg-[#0B1224] px-4 py-6 shadow-[0_0_30px_rgba(0,0,0,0.15)] sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl rounded-3xl border border-white/5 bg-[#152033]/30 p-5 backdrop-blur-md">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
