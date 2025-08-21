import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PageMetadata from '../../components/PageMetadata';

const DashboardHome: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">لوحة التحكم الرئيسية</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">مرحباً بك في لوحة التحكم. هذه واجهة مؤقتة.</p>
    </div>
);

const AnotherDashboardPage: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">صفحة أخرى</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">هذه صفحة أخرى في لوحة التحكم.</p>
    </div>
);

const DashboardIndex: React.FC = () => {
    // In a real application, you would protect this route and only show it to logged-in users.

    return (
        <>
            <PageMetadata 
                title="لوحة التحكم"
                description="لوحة تحكم لإدارة الموقع."
            />
            <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
                {/* Sidebar */}
                <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex-shrink-0">
                    <div className="p-6">
                        <h1 className="text-xl font-bold">
                            <Link to="/">EhabGM Dashboard</Link>
                        </h1>
                    </div>
                    <nav className="mt-6 px-2">
                        <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">الرئيسية</Link>
                        <Link to="/dashboard/another" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">صفحة أخرى</Link>
                    </nav>
                </aside>
                
                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                     <Routes>
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="/another" element={<AnotherDashboardPage />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default DashboardIndex;
