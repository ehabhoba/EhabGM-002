
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import ContentPage from './pages/ContentPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AIToolsPage from './pages/AIToolsPage';
import LoginPage from './pages/LoginPage';
import DashboardIndex from './pages/dashboard/DashboardIndex';
import SitemapPage from './pages/SitemapPage'; // Import SitemapPage
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className={`bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen flex flex-col transition-colors duration-300 ${isDashboard ? 'dashboard-view' : ''}`}>
      {!isDashboard && <Header />}
      <main className="flex-grow">
       <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/ai-tools" element={<AIToolsPage />} />
          <Route path="/page/:slug" element={<ContentPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<DashboardIndex />} />
          <Route path="/sitemap" element={<SitemapPage />} /> {/* Add Sitemap Route */}
        </Routes>
        </AnimatePresence>
      </main>
      {!isDashboard && <Footer />}
      {!isDashboard && <Chatbot />}
    </div>
  );
};

export default App;