import { ReactNode } from 'react';
import Sidebar from '@/Components/Sidebar';
import TopHeader from '@/Components/TopHeader';

interface AppShellProps {
    title: string;
    subtitle?: string;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    children: ReactNode;
}

export default function AppShell({
    title,
    subtitle,
    searchPlaceholder,
    searchValue,
    onSearchChange,
    children,
}: AppShellProps) {
    return (
        <div className="flex min-h-screen bg-[#0F172A] text-slate-300 font-sans antialiased">
            <Sidebar />

            <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                <TopHeader
                    title={title}
                    subtitle={subtitle}
                    searchPlaceholder={searchPlaceholder}
                    searchValue={searchValue}
                    onSearchChange={onSearchChange}
                />

                {children}
            </main>
        </div>
    );
}
