/**
 * Task interface - Core data model for the To-Do app
 */
export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string | null;
    priority: Priority;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
}

export type Priority = 'low' | 'medium' | 'high';

export type TaskStatus = 'pending' | 'completed';

export type FilterType = 'all' | 'pending' | 'completed';

/**
 * Task form data for creating/editing tasks
 */
export interface TaskFormData {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority;
}
