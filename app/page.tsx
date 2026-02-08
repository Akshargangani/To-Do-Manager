'use client';

import { useState } from 'react';
import { useTasks } from '@/hooks/useTasks';
import { Task, TaskFormData } from '@/types/task';
import FilterTabs from '@/components/FilterTabs';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';

/**
 * Home page - Main task management interface
 */
export default function Home() {
    const {
        tasks,
        filter,
        setFilter,
        isLoading,
        addTask,
        editTask,
        deleteTask,
        toggleComplete,
        counts,
    } = useTasks();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    // Handle form submission
    const handleSubmit = (data: TaskFormData) => {
        if (editingTask) {
            editTask(editingTask.id, data);
        } else {
            addTask(data);
        }
        setEditingTask(null);
    };

    // Handle edit click
    const handleEdit = (task: Task) => {
        setEditingTask(task);
        setIsFormOpen(true);
    };

    // Handle delete with confirmation
    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            deleteTask(id);
        }
    };

    // Handle modal close
    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingTask(null);
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                        My Tasks
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        {counts.pending} pending, {counts.completed} completed
                    </p>
                </div>

                {/* Add Task Button */}
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="flex items-center justify-center gap-2 px-5 py-3 
                   bg-gradient-to-r from-primary-500 to-primary-600 text-white 
                   font-medium rounded-xl shadow-lg shadow-primary-500/25 
                   hover:shadow-primary-500/40 hover:from-primary-600 hover:to-primary-700 
                   transition-all btn-focus"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Task
                </button>
            </div>

            {/* Filter Tabs */}
            <FilterTabs filter={filter} setFilter={setFilter} counts={counts} />

            {/* Task List */}
            <TaskList
                tasks={tasks}
                onToggleComplete={toggleComplete}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {/* Task Form Modal */}
            <TaskForm
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                onSubmit={handleSubmit}
                task={editingTask}
            />
        </div>
    );
}
