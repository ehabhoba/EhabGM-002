import React from 'react';
import PageMetadata from '../components/PageMetadata';

const LoginPage: React.FC = () => {
    // In a real application, you would handle user login here,
    // likely using the useAuth() hook from AuthContext.
    // For now, this is a placeholder page.

    return (
        <>
            <PageMetadata 
                title="تسجيل الدخول"
                description="صفحة تسجيل الدخول للوصول إلى لوحة التحكم."
            />
            <div className="animate-fade-in container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        تسجيل الدخول
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-300">
                        هذه الصفحة هي واجهة تسجيل الدخول. لم يتم تنفيذ وظيفة تسجيل الدخول بعد.
                    </p>
                    {/* A login form would go here */}
                    <form className="space-y-6 mt-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">البريد الإلكتروني</label>
                            <input type="email" name="email" id="email" disabled className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 cursor-not-allowed" />
                        </div>
                        <div>
                             <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">كلمة المرور</label>
                            <input type="password" name="password" id="password" disabled className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 cursor-not-allowed" />
                        </div>
                        <button type="submit" disabled className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400 cursor-not-allowed">
                            تسجيل الدخول (معطل)
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
