'use client';

import { FilterType } from '@/types/task';
import { cn } from '@/lib/utils';

interface FilterTabsProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
    counts: {
        all: number;
        pending: number;
        completed: number;
    };
}

/**
 * Filter tabs component for switching between task views
 */
export default function FilterTabs({ filter, setFilter, counts }: FilterTabsProps) {
    const tabs: { key: FilterType; label: string }[] = [
        { key: 'all', label: 'All' },
        { key: 'pending', label: 'Pending' },
        { key: 'completed', label: 'Completed' },
    ];

    return (
        <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setFilter(tab.key)}
                    className={cn(
                        'flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 btn-focus',
                        filter === tab.key
                            ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    )}
                >
                    <span>{tab.label}</span>
                    <span className={cn(
                        'px-2 py-0.5 text-xs rounded-full',
                        filter === tab.key
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    )}>
                        {counts[tab.key]}
                    </span>
                </button>
            ))}
        </div>
    );
}
