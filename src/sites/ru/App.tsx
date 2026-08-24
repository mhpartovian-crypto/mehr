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

// Russian content data
import ruData from "./data.json";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname, search]);
  return null;
}

export default function App() {
  // basename="/ru" ensures all routes are prefixed with /ru
  return (
    <BrowserRouter basename="/ru">
      <ScrollToTop />
      <div className="noise min-h-screen bg-graphite-950 font-body text-graphite-100">
        <Header content={ruData.nav} />
        <main>
          <Routes>
            <Route path="/" element={<Home content={ruData.hero} stats={ruData.stats} />} />
            <Route path="/products" element={<Products content={ruData.catalogue} />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About content={ruData.advantages} />} />
            <Route path="/contact" element={<Contact contact={ruData.contact} />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Home content={ruData.hero} stats={ruData.stats} />} />
          </Routes>
        </main>
        <Footer content={ruData.footer} />
        <WaFloat />
      </div>
    </BrowserRouter>
  );
}
