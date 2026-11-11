import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Global components
import { Navbar } from './Components/Nav.jsx';

// Route-level code-splitting for high-speed initial page loads
const Home = lazy(() => import('./Pages/Home.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));
const Service = lazy(() => import('./Pages/Service.jsx'));
const Contact = lazy(() => import('./Pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy.jsx'));
const CarevieProduct = lazy(() => import('./Pages/CarevieProduct.jsx'));

// Minimal unobtrusive fallback for smooth route transitions
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]/50">
    <div className="w-8 h-8 rounded-full border-2 border-blue-600/20 border-t-blue-600 animate-spin" />
  </div>
);

// Scrolls to the top whenever the page changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />

      <Navbar onOpenContact={() => navigate('/contact')} />

      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/carevie" element={<CarevieProduct />} />
          <Route path="/product" element={<CarevieProduct />} />
          <Route path="/products" element={<CarevieProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </>
  );
}