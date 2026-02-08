'use client';

import { useState, useEffect } from 'react';
import { Task, TaskFormData, Priority } from '@/types/task';
import { cn } from '@/lib/utils';

interface TaskFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: TaskFormData) => void;
    task?: Task | null;
}

/**
 * Modal form for creating and editing tasks
 */
export default function TaskForm({ isOpen, onClose, onSubmit, task }: TaskFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState<Priority>('medium');

    // Populate form when editing
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setDueDate(task.dueDate ? task.dueDate.split('T')[0] : '');
            setPriority(task.priority);
        } else {
            resetForm();
        }
    }, [task, isOpen]);

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('medium');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        onSubmit({
            title: title.trim(),
            description: description.trim(),
            dueDate: dueDate,
            priority,
        });

        resetForm();
        onClose();
    };

    if (!isOpen) return null;

    const priorities: Priority[] = ['low', 'medium', 'high'];
    const priorityStyles = {
        low: 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-700',
        medium: 'border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700',
        high: 'border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700',
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="modal-backdrop animate-fade-in"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div className="relative z-50 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-scale-in">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {task ? 'Edit Task' : 'Add New Task'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What needs to be done?"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 
                       dark:border-gray-600 rounded-xl text-gray-800 dark:text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-all"
                            required
                            autoFocus
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add more details..."
                            rows={3}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 
                       dark:border-gray-600 rounded-xl text-gray-800 dark:text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Due Date
                        </label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 
                       dark:border-gray-600 rounded-xl text-gray-800 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Priority
                        </label>
                        <div className="flex gap-3">
                            {priorities.map((p) => (
                                <button
                                    key={p}
                                    type="button"
                                    onClick={() => setPriority(p)}
                                    className={cn(
                                        'flex-1 py-2 px-3 rounded-xl border-2 text-sm font-medium capitalize transition-all',
                                        priority === p
                                            ? priorityStyles[p]
                                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                                    )}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                       font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 
                       transition-colors btn-focus"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-3 px-4 bg-gradient-to-r from-primary-500 to-primary-600 
                       text-white font-medium rounded-xl hover:from-primary-600 hover:to-primary-700 
                       shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 
                       transition-all btn-focus"
                        >
                            {task ? 'Save Changes' : 'Add Task'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
