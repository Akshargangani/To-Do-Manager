'use client';

import { useState, useEffect, useCallback } from 'react';
import { Task, FilterType, TaskFormData } from '@/types/task';
import { getTasks, saveTasks, createTask, updateTask } from '@/lib/storage';
import { sortByPriority } from '@/lib/utils';

/**
 * Custom hook for managing tasks state and operations
 */
export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<FilterType>('all');
    const [isLoading, setIsLoading] = useState(true);

    // Load tasks from LocalStorage on mount
    useEffect(() => {
        const storedTasks = getTasks();
        setTasks(sortByPriority(storedTasks));
        setIsLoading(false);
    }, []);

    // Save tasks to LocalStorage whenever they change
    useEffect(() => {
        if (!isLoading) {
            saveTasks(tasks);
        }
    }, [tasks, isLoading]);

    // Add a new task
    const addTask = useCallback((formData: TaskFormData) => {
        const newTask = createTask(formData);
        setTasks(prev => sortByPriority([newTask, ...prev]));
    }, []);

    // Edit an existing task
    const editTask = useCallback((id: string, formData: TaskFormData) => {
        setTasks(prev => {
            const updated = prev.map(task =>
                task.id === id ? updateTask(task, formData) : task
            );
            return sortByPriority(updated);
        });
    }, []);

    // Delete a task
    const deleteTask = useCallback((id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    // Toggle task completion status
    const toggleComplete = useCallback((id: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed', updatedAt: new Date().toISOString() }
                    : task
            )
        );
    }, []);

    // Get filtered tasks based on current filter
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        return task.status === filter;
    });

    // Get task counts for filter badges
    const counts = {
        all: tasks.length,
        pending: tasks.filter(t => t.status === 'pending').length,
        completed: tasks.filter(t => t.status === 'completed').length,
    };

    return {
        tasks: filteredTasks,
        filter,
        setFilter,
        isLoading,
        addTask,
        editTask,
        deleteTask,
        toggleComplete,
        counts,
    };
}
