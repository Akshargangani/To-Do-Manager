'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Navbar component with app title and dark mode toggle
 */
export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    // Initialize dark mode from localStorage or system preference
    useEffect(() => {
        const stored = localStorage.getItem('darkMode');
        if (stored !== null) {
            setDarkMode(stored === 'true');
        } else {
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);

    // Apply dark mode class to document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    return (
        <header className="glass sticky top-0 z-30 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center justify-between h-16">
                    {/* Logo & Title */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 
                          flex items-center justify-center shadow-lg shadow-primary-500/25
                          group-hover:shadow-primary-500/40 transition-shadow">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gray-800 dark:text-white">
                            Task<span className="gradient-text">Flow</span>
                        </span>
                    </Link>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                     hover:bg-gray-200 dark:hover:bg-gray-600 
                     transition-colors btn-focus"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
