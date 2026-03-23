import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Tournament from './pages/Tournament';
import Rules from './pages/Rules';
import Divisions from './pages/Divisions';
import Sponsors from './pages/Sponsors';
import AboutUs from './pages/AboutUs';
import AAACentral from './pages/AAACentral';
import FAQ from './pages/FAQ';
import CoachsCorner from './pages/CoachsCorner';

function App() {
  return (
    <HashRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/aaacentral/*" element={<AAACentral />} />
        <Route path="/coachs-corner" element={<CoachsCorner />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about/*" element={<AboutUs />} />
      </Routes>
    </Layout>
    </HashRouter>
  )
}

export default App
