import { Task, TaskFormData } from '@/types/task';

const STORAGE_KEY = 'taskflow_tasks';

/**
 * Get all tasks from LocalStorage
 */
export function getTasks(): Task[] {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    try {
        return JSON.parse(stored);
    } catch {
        return [];
    }
}

/**
 * Save all tasks to LocalStorage
 */
export function saveTasks(tasks: Task[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Generate a unique ID for tasks
 */
export function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new task from form data
 */
export function createTask(formData: TaskFormData): Task {
    const now = new Date().toISOString();
    return {
        id: generateId(),
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate || null,
        priority: formData.priority,
        status: 'pending',
        createdAt: now,
        updatedAt: now,
    };
}

/**
 * Update an existing task with form data
 */
export function updateTask(task: Task, formData: TaskFormData): Task {
    return {
        ...task,
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate || null,
        priority: formData.priority,
        updatedAt: new Date().toISOString(),
    };
}
