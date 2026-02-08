'use client';

/**
 * Empty state component shown when no tasks exist
 */
export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in">
            {/* Illustration */}
            <div className="w-48 h-48 mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 
                      dark:from-primary-900/30 dark:to-primary-800/30 rounded-full opacity-50" />
                <div className="absolute inset-4 flex items-center justify-center">
                    <svg className="w-24 h-24 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                {/* Decorative dots */}
                <div className="absolute top-4 right-8 w-3 h-3 bg-primary-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.1s' }} />
                <div className="absolute bottom-8 left-4 w-2 h-2 bg-primary-300 rounded-full animate-bounce"
                    style={{ animationDelay: '0.3s' }} />
                <div className="absolute top-12 left-8 w-2 h-2 bg-primary-500 rounded-full animate-bounce"
                    style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                No tasks yet!
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">
                Start by adding your first task. Click the <span className="text-primary-500 font-medium">+ Add Task</span> button to get started.
            </p>
        </div>
    );
}
