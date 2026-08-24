# Persis Metal - Multi-Language Independent Sites Implementation

## Overview

This implementation restructures the Persis Metal website into **three completely independent Single Page Applications (SPAs)** hosted under subdirectories of a single domain. Each language version is a standalone build with its own router, content, and SEO configuration.

**Key Features:**
- ✅ Clean URLs with History Routing (NO hash routing)
- ✅ Three independent sites: `/en/`, `/ar/`, `/ru/`
- ✅ Complete content and state isolation
- ✅ Root domain 301 redirect to `/en/`
- ✅ Independent SEO per language
- ✅ Proper hreflang tags for international SEO
- ✅ Server configurations for Nginx and Apache

---

## Folder Structure

```
/workspace
├── src/
│   ├── sites/
│   │   ├── en/                    # English site (standalone)
│   │   │   ├── index.html         # English HTML with SEO meta tags
│   │   │   ├── App.tsx            # Router with basename="/en"
│   │   │   ├── main.tsx           # Entry point
│   │   │   └── data.json          # English content only
│   │   ├── ar/                    # Arabic site (standalone)
│   │   │   ├── index.html         # Arabic HTML (rtl, Arabic SEO)
│   │   │   ├── App.tsx            # Router with basename="/ar"
│   │   │   ├── main.tsx           # Entry point
│   │   │   └── data.json          # Arabic content only
│   │   └── ru/                    # Russian site (standalone)
│   │       ├── index.html         # Russian HTML with SEO meta tags
│   │       ├── App.tsx            # Router with basename="/ru"
│   │       ├── main.tsx           # Entry point
│   │       └── data.json          # Russian content only
│   ├── components/                # Shared UI components
│   ├── pages/                     # Shared page components
│   └── index.css                  # Shared styles
├── server-configs/
│   ├── nginx.conf                 # Nginx server configuration
│   └── .htaccess                  # Apache configuration
├── dist/                          # Build output (after npm run build:all)
│   ├── en/                        # English site deployment files
│   ├── ar/                        # Arabic site deployment files
│   └── ru/                        # Russian site deployment files
├── vite.config.js                 # Vite configuration with multi-build support
├── package.json                   # npm scripts for each language
├── ARCHITECTURE.md                # Detailed architecture documentation
└── DEPLOYMENT_CHECKLIST.md        # Step-by-step deployment guide
```

---

## URL Structure

After deployment, your URLs will look like this:

| Language | Home Page | Products | Blog | About |
|----------|-----------|----------|------|-------|
| English | `https://www.persismetal.com/en/` | `https://www.persismetal.com/en/products` | `https://www.persismetal.com/en/blog` | `https://www.persismetal.com/en/about` |
| Arabic | `https://www.persismetal.com/ar/` | `https://www.persismetal.com/ar/products` | `https://www.persismetal.com/ar/blog` | `https://www.persismetal.com/ar/about` |
| Russian | `https://www.persismetal.com/ru/` | `https://www.persismetal.com/ru/products` | `https://www.persismetal.com/ru/blog` | `https://www.persismetal.com/ru/about` |

**Root domain redirects:**
- `https://persismetal.com/` → `https://www.persismetal.com/en/` (301)
- `https://www.persismetal.com/` → `https://www.persismetal.com/en/` (301)

---

## Router Configuration Example (English Site)

Here's the router configuration for the English site (`src/sites/en/App.tsx`):

```tsx
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

// English content data - ISOLATED from other languages
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
```

**Key Points:**
- Uses `BrowserRouter` (History mode) instead of `HashRouter`
- `basename="/en"` prefixes all routes automatically
- Content is loaded from local `data.json` (isolated per language)
- Same pattern applies to `/ar/` and `/ru/` sites

---

## npm Scripts

### Development
```bash
# Start English site dev server
npm run dev:en

# Start Arabic site dev server
npm run dev:ar

# Start Russian site dev server
npm run dev:ru
```

### Production Build
```bash
# Build English site only
npm run build:en

# Build Arabic site only
npm run build:ar

# Build Russian site only
npm run build:ru

# Build all three sites
npm run build:all
```

---

## Server Configuration

### Nginx Configuration Highlights

```nginx
# Root domain redirect to /en/
location = / {
    return 301 https://www.persismetal.com/en/;
}

# SPA fallback for English site
location /en/ {
    try_files $uri $uri/ /en/index.html;
}

# SPA fallback for Arabic site
location /ar/ {
    try_files $uri $uri/ /ar/index.html;
}

# SPA fallback for Russian site
location /ru/ {
    try_files $uri $uri/ /ru/index.html;
}
```

### Apache Configuration Highlights

```apache
# Root redirect to /en/
RewriteRule ^$ /en/ [R=301,L]

# SPA fallback for each language
RewriteCond %{REQUEST_URI} ^/en/ [NC]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^en/(.*)$ /en/index.html [L,QSA]
```

Full configurations are in `server-configs/` directory.

---

## SEO Configuration

Each language site has independent SEO meta tags in its `index.html`:

### English (`/en/index.html`)
```html
<title>Persis Metal — Iranian Steel, Copper & Aluminum Exporter</title>
<meta name="description" content="Persis Metal exports Iranian steel..." />
<link rel="canonical" href="https://www.persismetal.com/en/" />
<link rel="alternate" hreflang="en" href="https://www.persismetal.com/en/" />
<link rel="alternate" hreflang="ar" href="https://www.persismetal.com/ar/" />
<link rel="alternate" hreflang="ru" href="https://www.persismetal.com/ru/" />
<meta property="og:locale" content="en_US" />
```

### Arabic (`/ar/index.html`)
```html
<title>برسيس متال — مُصدّر الصلب والنحاس والألمنيوم الإيراني</title>
<meta name="description" content="تُصدّر برسيس متال البلومات الإيرانية..." />
<link rel="canonical" href="https://www.persismetal.com/ar/" />
<link rel="alternate" hreflang="en" href="https://www.persismetal.com/en/" />
<link rel="alternate" hreflang="ar" href="https://www.persismetal.com/ar/" />
<link rel="alternate" hreflang="ru" href="https://www.persismetal.com/ru/" />
<meta property="og:locale" content="ar_AE" />
<html lang="ar" dir="rtl">
```

### Russian (`/ru/index.html`)
```html
<title>Persis Metal — Экспорт иранской стали, меди и алюминия</title>
<meta name="description" content="Persis Metal экспортирует иранские стальные заготовки..." />
<link rel="canonical" href="https://www.persismetal.com/ru/" />
<link rel="alternate" hreflang="en" href="https://www.persismetal.com/en/" />
<link rel="alternate" hreflang="ar" href="https://www.persismetal.com/ar/" />
<link rel="alternate" hreflang="ru" href="https://www.persismetal.com/ru/" />
<meta property="og:locale" content="ru_RU" />
```

---

## Content Isolation

Each language has its own `data.json` file:

- `src/sites/en/data.json` - English content only
- `src/sites/ar/data.json` - Arabic content only  
- `src/sites/ru/data.json` - Russian content only

**Benefits:**
- Editing Arabic content has ZERO risk of affecting English or Russian sites
- Each site can have different products, markets, or team members if needed
- Independent translation workflows
- Separate build processes

---

## Deployment Steps

1. **Build all sites:**
   ```bash
   npm run build:all
   ```

2. **Upload to server:**
   ```bash
   rsync -avz dist/ user@yourserver:/var/www/persismetal/
   ```

3. **Configure server:**
   - For Nginx: Copy `server-configs/nginx.conf` to `/etc/nginx/sites-available/`
   - For Apache: Copy `server-configs/.htaccess` to document root

4. **Set up SSL:**
   ```bash
   sudo certbot --nginx -d persismetal.com -d www.persismetal.com
   ```

5. **Test thoroughly** (see `DEPLOYMENT_CHECKLIST.md`)

---

## Key Differences from Previous Implementation

| Before | After |
|--------|-------|
| Hash routing (`#/products`) | Clean URLs (`/en/products`) |
| Single app with dynamic language switching | Three independent apps |
| Shared content/state across languages | 100% isolated content per language |
| One index.html for all languages | Separate index.html per language |
| Limited SEO control per language | Full independent SEO per language |

---

## Files Created/Modified

### New Files
- `src/sites/en/index.html` - English site HTML
- `src/sites/en/App.tsx` - English router config
- `src/sites/en/main.tsx` - English entry point
- `src/sites/en/data.json` - English content
- `src/sites/ar/index.html` - Arabic site HTML
- `src/sites/ar/App.tsx` - Arabic router config
- `src/sites/ar/main.tsx` - Arabic entry point
- `src/sites/ar/data.json` - Arabic content
- `src/sites/ru/index.html` - Russian site HTML
- `src/sites/ru/App.tsx` - Russian router config
- `src/sites/ru/main.tsx` - Russian entry point
- `src/sites/ru/data.json` - Russian content
- `server-configs/nginx.conf` - Nginx configuration
- `server-configs/.htaccess` - Apache configuration
- `ARCHITECTURE.md` - Architecture documentation
- `DEPLOYMENT_CHECKLIST.md` - Deployment guide

### Modified Files
- `vite.config.js` - Added multi-build support
- `package.json` - Added language-specific scripts

---

## Next Steps

1. Review the generated files
2. Test locally with `npm run dev:en`, `npm run dev:ar`, `npm run dev:ru`
3. Run production build with `npm run build:all`
4. Follow `DEPLOYMENT_CHECKLIST.md` for deployment
5. Submit sitemaps to Google Search Console for each language

For questions or issues, refer to the detailed documentation in `ARCHITECTURE.md` and `DEPLOYMENT_CHECKLIST.md`.
