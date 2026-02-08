import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TaskFlow - To-Do Manager',
    description: 'A modern, minimal To-Do application to manage your tasks efficiently. Built with Next.js and Tailwind CSS.',
    keywords: ['todo', 'task manager', 'productivity', 'next.js'],
    authors: [{ name: 'Your Name' }],
    openGraph: {
        title: 'TaskFlow - To-Do Manager',
        description: 'A modern, minimal To-Do application to manage your tasks efficiently.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
                        {children}
                    </main>
                    <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>Made with ❤️ for learning • TaskFlow © 2024</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
