import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./features/home";
import { BusinessPage } from "./features/business";
import { CartPage } from "./features/cart";
import { Navbar } from "./features/shared/components/Navbar";
import { useScrollToTop } from "./features/shared/hooks/useScrollToTop";
import "./features/shared/effects/ripple";
import "./features/shared/styles/ripple.css";

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  useScrollToTop(); 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business/:id" element={<BusinessPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
