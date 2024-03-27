import "./App.scss";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";

import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </>
  );
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
           <Route index element={<Home />} />
            <Route path="/Marek_Kamyk_Personal_Website" element={<Home />} />
            <Route
              path="/Marek_Kamyk_Personal_Website/Blog"
              element={<Blog />}
            />
            <Route
              path="/Marek_Kamyk_Personal_Website/Contact"
              element={<Contact />}
            />
            <Route
              path="/Marek_Kamyk_Personal_Website/Portfolio"
              element={<Portfolio />}
            />
            <Route path="*" element={<NoPage />} />
    </Routes>
  );
}



export default App;
