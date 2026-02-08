'use client';

import { Task } from '@/types/task';
import { formatDate, isOverdue, getPriorityColor, getPriorityDot, cn } from '@/lib/utils';

interface TaskItemProps {
    task: Task;
    onToggleComplete: (id: string) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}

/**
 * Individual task card component
 */
export default function TaskItem({ task, onToggleComplete, onEdit, onDelete }: TaskItemProps) {
    const isTaskOverdue = task.dueDate && isOverdue(task.dueDate) && task.status !== 'completed';

    return (
        <div className={cn(
            'task-card group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700',
            task.status === 'completed' && 'opacity-75'
        )}>
            <div className="flex items-start gap-3">
                {/* Checkbox */}
                <button
                    onClick={() => onToggleComplete(task.id)}
                    className={cn(
                        'task-checkbox flex-shrink-0 mt-0.5',
                        task.status === 'completed' && 'completed'
                    )}
                    aria-label={task.status === 'completed' ? 'Mark as pending' : 'Mark as completed'}
                >
                    {task.status === 'completed' && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        {/* Priority dot */}
                        <span className={cn('w-2 h-2 rounded-full flex-shrink-0', getPriorityDot(task.priority))} />

                        {/* Title */}
                        <h3 className={cn(
                            'font-medium text-gray-800 dark:text-white truncate',
                            task.status === 'completed' && 'line-through text-gray-500 dark:text-gray-400'
                        )}>
                            {task.title}
                        </h3>
                    </div>

                    {/* Description */}
                    {task.description && (
                        <p className={cn(
                            'text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2',
                            task.status === 'completed' && 'line-through'
                        )}>
                            {task.description}
                        </p>
                    )}

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Priority badge */}
                        <span className={cn(
                            'px-2 py-0.5 text-xs font-medium rounded-full capitalize',
                            getPriorityColor(task.priority)
                        )}>
                            {task.priority}
                        </span>

                        {/* Due date */}
                        {task.dueDate && (
                            <span className={cn(
                                'flex items-center gap-1 text-xs',
                                isTaskOverdue
                                    ? 'text-red-500 dark:text-red-400 font-medium'
                                    : 'text-gray-500 dark:text-gray-400'
                            )}>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {isTaskOverdue ? 'Overdue: ' : ''}{formatDate(task.dueDate)}
                            </span>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => onEdit(task)}
                        className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 
                     dark:hover:bg-primary-900/20 rounded-lg transition-colors btn-focus"
                        aria-label="Edit task"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 
                     dark:hover:bg-red-900/20 rounded-lg transition-colors btn-focus"
                        aria-label="Delete task"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
