import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';
import { Home } from './pages/Home';
import { Observatory } from './pages/Observatory';
import { Services } from './pages/Services';
import { Statistics } from './pages/Statistics';
import { Partners } from './pages/Partners';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ServiceDetail } from './pages/ServiceDetail';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { AIAnalysis } from './pages/dashboard/AIAnalysis';
import { Networking } from './pages/dashboard/Networking';
import { Help } from './pages/dashboard/Help';
import { Messages } from './pages/dashboard/Messages';
import { ProtectedRoute } from './components/ProtectedRoute';
import TeachableMachineApp from './components/teachable_ui';



// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/*" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/observatory" element={<Observatory />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/:serviceId" element={<ServiceDetail />} />
                    <Route path="/IA" element={<TeachableMachineApp />} />

                    
                  </Routes>
                </main>
                <Footer />
                <WhatsAppFab />
              </div>
            } />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardHome />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/messages" element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/ai-analysis" element={
              <ProtectedRoute>
                <AIAnalysis />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/networking" element={
              <ProtectedRoute>
                <Networking />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/help" element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/statistics" element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold">Statistiques Dashboard</h1>
                  <p className="text-gray-600 mt-4">Page en développement</p>
                </div>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/gallery" element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/settings" element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold">Paramètres</h1>
                  <p className="text-gray-600 mt-4">Page en développement</p>
                </div>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;