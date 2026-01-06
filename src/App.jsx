import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

// Layouts
import MainLayout from "./Components/Layout/MainLayout";
import EmptyLayout from "./Components/Layout/EmptyLayout";

// Pages
import Home from "./Components/Home/Home";
import Tiles from "./Components/Tiles/Tiles";
import Marbals from "./Components/Marbals/Marbals";
import Senetry from "./Components/SenetrySec/Senetry";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import VerificationComplete from "./Components/Login/VerificationComplete";
import Verification from "./Components/Login/Verification";
import Contact from "./Components/Contact/Contact";
import PageNotFound from "./Components/PageNotFound";
import Purchase from "./Purchase/Purchase";

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // super smooth
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.4,
      wheelMultiplier: 2.2,
      lerp: 0.07,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Routes>
      {/* All pages WITH Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tiles" element={<Tiles />} />
        <Route path="/marbals" element={<Marbals />} /> 
        <Route path="/sanitary" element={<Senetry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/purchase" element={<Purchase />} />
      </Route>

      {/* Pages WITHOUT Navbar + Footer */}
      <Route element={<EmptyLayout />}>
        <Route path="/verification-complete" element={<VerificationComplete />} />
        <Route path="/account-created" element={<Verification />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
