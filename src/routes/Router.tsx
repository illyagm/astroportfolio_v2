import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import MyGear from '../pages/MyGear/MyGear';
import PageTransition from '@components/PageTransition';
import MyGallery from 'pages/MyGallery/MyGallery';

const AppRouter: React.FC = () => {
  const AnimatedRoutes = () => {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageTransition>
                <MyGallery />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/mygear"
            element={
              <PageTransition>
                <MyGear />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default AppRouter;
