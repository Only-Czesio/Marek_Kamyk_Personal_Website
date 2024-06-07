import "./App.scss";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import { useLocation, HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

interface LocationProviderProps {
  children: React.ReactNode;
}

function LocationProvider({ children }: LocationProviderProps) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function App() {
  return (
    <>
      <HashRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </HashRouter>
    </>
  );
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
