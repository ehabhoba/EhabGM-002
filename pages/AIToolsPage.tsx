
import React, { useState } from 'react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { SparklesIcon } from '../components/IconComponents';

const AIToolsPage: React.FC = () => {
    const [projectDesc, setProjectDesc] = useState('');
    const [ideaType, setIdeaType] = useState('slogans');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!projectDesc) {
            setError('من فضلك، اكتب وصف لمشروعك الأول.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        const prompt = ideaType === 'slogans'
            ? `باللهجة المصرية، ابتكر 5 شعارات إعلانية قصيرة وجذابة لمشروع يوصف كالتالي: "${projectDesc}". يجب أن تكون الشعارات متنوعة ومناسبة للسوق المصري.`
            : `باللهجة المصرية، اكتب 3 أفكار لمنشورات على فيسبوك للترويج لمشروع يوصف كالتالي: "${projectDesc}". يجب أن تكون الأفكار إبداعية وتتضمن دعوة لاتخاذ إجراء (Call to Action).`;

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response: GenerateContentResponse = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
            });

            setResult(response.text.replace(/\n/g, '<br />'));
        } catch (err) {
            console.error(err);
            setError('عفواً، حدث خطأ أثناء توليد الأفكار. حاول مرة أخرى.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mb-4">
                        <SparklesIcon />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">مولد الأفكار التسويقية</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        محتاج إلهام؟ استخدم أداتنا المجانية لتوليد شعارات وأفكار لمشروعك بالذكاء الاصطناعي.
                    </p>
                </div>
            </section>

            {/* AI Tool Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
                        <div>
                            <label htmlFor="projectDesc" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
                                1. اوصف مشروعك أو منتجك
                            </label>
                            <textarea
                                id="projectDesc"
                                value={projectDesc}
                                onChange={(e) => setProjectDesc(e.target.value)}
                                rows={4}
                                placeholder="مثال: مطعم يقدم أكل بيتي أصيل في حلوان، متخصص في الطواجن والمشويات."
                                className="mt-2 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800"
                            />
                        </div>

                        <div>
                            <label htmlFor="ideaType" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
                                2. اختار نوع الفكرة
                            </label>
                            <select
                                id="ideaType"
                                value={ideaType}
                                onChange={(e) => setIdeaType(e.target.value)}
                                className="mt-2 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="slogans">شعارات إعلانية (Slogans)</option>
                                <option value="social_posts">أفكار منشورات سوشيال ميديا</option>
                            </select>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleGenerate}
                                disabled={isLoading}
                                className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                            >
                                {isLoading ? 'جاري التفكير...' : 'ولّد الأفكار الآن'}
                            </button>
                        </div>
                    </div>

                    {/* Result Section */}
                    {(isLoading || error || result) && (
                         <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">النتائج:</h2>
                             {isLoading && (
                                <div className="flex justify-center items-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                                </div>
                             )}
                             {error && <p className="text-red-500 text-center">{error}</p>}
                             {result && (
                                <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: result }}></div>
                             )}
                         </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AIToolsPage;
