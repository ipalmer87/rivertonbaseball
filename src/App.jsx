import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Tournament from './pages/Tournament';
import Rules from './pages/Rules';
import Divisions from './pages/Divisions';
import Sponsors from './pages/Sponsors';
import AboutUs from './pages/AboutUs';
import AAACentral from './pages/AAACentral';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/aaacentral/*" element={<AAACentral />} />
        <Route path="/about/*" element={<AboutUs />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
