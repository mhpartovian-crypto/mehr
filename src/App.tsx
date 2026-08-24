import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate, useParams, useOutlet } from "react-router-dom";
import { LangProvider, LANGUAGES, useLang } from "./i18n";
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

/**
 * LocalizedRoutes renders the app routes for a specific language.
 * Routes are relative (no leading slash) since they're nested under /:langCode/*
 */
function LocalizedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:slug" element={<ProductDetail />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="quote" element={<Quote />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

/**
 * LanguageLayout reads the lang from the URL param and sets it via context.
 * It also renders hreflang tags for SEO.
 */
function LanguageLayout() {
  const { langCode } = useParams<{ langCode: string }>();
  const { setLang, lang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  // Sync URL language with context
  useEffect(() => {
    if (langCode && LANGUAGES.includes(langCode as any)) {
      setLang(langCode as any);
    } else if (langCode) {
      // Invalid lang code, redirect to default
      navigate("/en" + location.pathname.replace(/^\/[^\/]+/, ""), { replace: true });
    }
  }, [langCode, setLang, navigate, location.pathname]);

  // Redirect root "/" to "/en"
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/en", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      {/* Hreflang tags for multilingual SEO */}
      <HreflangTags />
      <LocalizedRoutes />
    </>
  );
}

/** Renders hreflang link tags for all language variants of the current page */
function HreflangTags() {
  const location = useLocation();
  const basePath = location.pathname.replace(/^\/(en|ar|ru)/, "") || "/";
  
  const urls = {
    en: `https://persismetal.com/en${basePath}`,
    ar: `https://persismetal.com/ar${basePath}`,
    ru: `https://persismetal.com/ru${basePath}`,
  };

  return (
    <>
      <link rel="alternate" hrefLang="en" href={urls.en} />
      <link rel="alternate" hrefLang="ar" href={urls.ar} />
      <link rel="alternate" hrefLang="ru" href={urls.ru} />
      <link rel="alternate" hrefLang="x-default" href={urls.en} />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="noise min-h-screen bg-graphite-950 font-body text-graphite-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LanguageLayout />} />
              <Route path="/:langCode/*" element={<LanguageLayout />} />
            </Routes>
          </main>
          <Footer />
          <WaFloat />
        </div>
      </BrowserRouter>
    </LangProvider>
  );
}
