import "./App.scss";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NoPage from './pages/NoPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Marek_Kamyk_Personal_Website" element={<Home />} />
          <Route path="/Marek_Kamyk_Personal_Website/Blog" element={<Blog />} />
          <Route path="/Marek_Kamyk_Personal_Website/Contact" element={<Contact />} />
          <Route path="/Marek_Kamyk_Personal_Website/Portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
