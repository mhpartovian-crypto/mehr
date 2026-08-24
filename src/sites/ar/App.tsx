import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { WaFloat } from "../../components/Chrome";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import ProductDetail from "../../pages/ProductDetail";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Quote from "../../pages/Quote";
import Blog from "../../pages/Blog";

// Arabic content data
import arData from "./data.json";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname, search]);
  return null;
}

export default function App() {
  // basename="/ar" ensures all routes are prefixed with /ar
  return (
    <BrowserRouter basename="/ar">
      <ScrollToTop />
      <div className="noise min-h-screen bg-graphite-950 font-body text-graphite-100" dir="rtl">
        <Header content={arData.nav} rtl={true} />
        <main>
          <Routes>
            <Route path="/" element={<Home content={arData.hero} stats={arData.stats} />} />
            <Route path="/products" element={<Products content={arData.catalogue} />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About content={arData.advantages} />} />
            <Route path="/contact" element={<Contact contact={arData.contact} />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Home content={arData.hero} stats={arData.stats} />} />
          </Routes>
        </main>
        <Footer content={arData.footer} rtl={true} />
        <WaFloat />
      </div>
    </BrowserRouter>
  );
}
