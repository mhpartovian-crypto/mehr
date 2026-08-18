import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { LangProvider } from "./i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WaFloat } from "./components/Chrome";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Blog from "./pages/Blog";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname, search]);
  return null;
}

export default function App() {
  return (
    <LangProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="noise min-h-screen bg-graphite-950 font-body text-graphite-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <WaFloat />
        </div>
      </HashRouter>
    </LangProvider>
  );
}
