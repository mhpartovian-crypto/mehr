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

// English content data
import enData from "./data.json";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname, search]);
  return null;
}

export default function App() {
  // basename="/en" ensures all routes are prefixed with /en
  return (
    <BrowserRouter basename="/en">
      <ScrollToTop />
      <div className="noise min-h-screen bg-graphite-950 font-body text-graphite-100">
        <Header content={enData.nav} />
        <main>
          <Routes>
            <Route path="/" element={<Home content={enData.hero} stats={enData.stats} />} />
            <Route path="/products" element={<Products content={enData.catalogue} />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About content={enData.advantages} />} />
            <Route path="/contact" element={<Contact contact={enData.contact} />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Home content={enData.hero} stats={enData.stats} />} />
          </Routes>
        </main>
        <Footer content={enData.footer} />
        <WaFloat />
      </div>
    </BrowserRouter>
  );
}
