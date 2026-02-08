import { Task, Priority } from '@/types/task';

/**
 * Format date for display
 */
export function formatDate(dateString: string | null): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

/**
 * Check if a date is overdue
 */
export function isOverdue(dateString: string | null): boolean {
    if (!dateString) return false;

    const dueDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return dueDate < today;
}

/**
 * Get priority color class
 */
export function getPriorityColor(priority: Priority): string {
    const colors = {
        high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        low: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    };
    return colors[priority];
}

/**
 * Get priority dot color
 */
export function getPriorityDot(priority: Priority): string {
    const colors = {
        high: 'bg-red-500',
        medium: 'bg-amber-500',
        low: 'bg-emerald-500',
    };
    return colors[priority];
}

/**
 * Sort tasks by priority
 */
export function sortByPriority(tasks: Task[]): Task[] {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

/**
 * Classify the CN helper for conditional classes
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}
