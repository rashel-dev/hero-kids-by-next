import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <div className="relative">
                <h1 className="text-9xl font-extrabold text-primary opacity-20">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl md:text-4xl font-bold text-secondary-content bg-secondary px-4 py-2 rounded-lg rotate-3 shadow-lg">
                        Oops! Page Lost in Playland
                    </p>
                </div>
            </div>
            
            <div className="mt-12 max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Even heroes get lost sometimes!</h2>
                <p className="text-base-content/70 mb-8">
                    The page you are looking for might have been moved, deleted, or is hiding in the toy box.
                </p>
                
                <Link href="/" className="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                </Link>
            </div>

            {/* Decorative elements */}
            <div className="mt-16 flex gap-4 opacity-50">
                <span className="w-4 h-4 rounded-full bg-primary animate-bounce"></span>
                <span className="w-4 h-4 rounded-full bg-secondary animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-4 h-4 rounded-full bg-accent animate-bounce [animation-delay:-0.3s]"></span>
            </div>
        </div>
    );
};

export default NotFound;
