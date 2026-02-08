'use client';

import { Task } from '@/types/task';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

interface TaskListProps {
    tasks: Task[];
    onToggleComplete: (id: string) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}

/**
 * Task list component that renders all tasks or empty state
 */
export default function TaskList({ tasks, onToggleComplete, onEdit, onDelete }: TaskListProps) {
    if (tasks.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="space-y-3">
            {tasks.map((task, index) => (
                <div
                    key={task.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    <TaskItem
                        task={task}
                        onToggleComplete={onToggleComplete}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    );
}
