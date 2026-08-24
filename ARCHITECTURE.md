# Persis Metal - Multi-Language Independent Sites Architecture

## Overview
This document describes the architecture for three completely independent Single Page Applications (SPAs) hosted under subdirectories:
- `/en/` - English site
- `/ar/` - Arabic site  
- `/ru/` - Russian site

Each site is a standalone build with its own router, content, and SEO configuration.

---

## 1. Folder Structure

```
/workspace
├── /src
│   ├── /sites
│   │   ├── /en
│   │   │   ├── index.html          # English-specific HTML with SEO
│   │   │   ├── main.tsx            # Entry point for EN site
│   │   │   ├── App.tsx             # Router with basename="/en"
│   │   │   └── data.json           # English content only
│   │   ├── /ar
│   │   │   ├── index.html          # Arabic-specific HTML with SEO
│   │   │   ├── main.tsx            # Entry point for AR site
│   │   │   ├── App.tsx             # Router with basename="/ar"
│   │   │   └── data.json           # Arabic content only
│   │   └── /ru
│   │       ├── index.html          # Russian-specific HTML with SEO
│   │       ├── main.tsx            # Entry point for RU site
│   │       ├── App.tsx             # Router with basename="/ru"
│   │       └── data.json           # Russian content only
│   ├── /components                 # Shared UI components
│   ├── /pages                      # Shared page components
│   └── /styles                     # Shared styles
├── /public
│   └── /images
├── vite.config.js                  # Multi-build configuration
├── package.json
└── server-configs/
    ├── nginx.conf                  # Nginx configuration
    └── .htaccess                   # Apache configuration
```

---

## 2. Key Implementation Details

### Router Configuration (History Mode with Basename)
Each site uses `BrowserRouter` with a specific `basename`:
- EN: `<BrowserRouter basename="/en">`
- AR: `<BrowserRouter basename="/ar">`
- RU: `<BrowserRouter basename="/ru">`

### Content Isolation
Each language has its own `data.json` file containing all text content. No shared state between sites.

### Build Output
Vite will produce three separate builds:
```
/dist
├── /en
│   ├── index.html
│   ├── assets/
│   └── ...
├── /ar
│   ├── index.html
│   ├── assets/
│   └── ...
└── /ru
    ├── index.html
    ├── assets/
    └── ...
```

---

## 3. Server Configuration

### Root Domain Redirect
All requests to `persismetal.com` or `www.persismetal.com` redirect (301) to `https://www.persismetal.com/en/`

### SPA Fallback Rules
Server must serve the correct `index.html` for each subdirectory while preserving clean URLs.

See `server-configs/nginx.conf` and `server-configs/.htaccess` for exact configurations.

---

## 4. SEO Configuration

Each site has independent:
- `<title>` tags
- `<meta name="description">`
- Open Graph tags
- `hreflang` tags for cross-language linking
- Self-referencing canonical tags

---

## 5. Deployment Checklist

- [ ] Build all three sites: `npm run build:en`, `npm run build:ar`, `npm run build:ru`
- [ ] Deploy `/dist/en`, `/dist/ar`, `/dist/ru` to respective subdirectories
- [ ] Configure server (Nginx/Apache) with provided rules
- [ ] Test root domain redirects to `/en/`
- [ ] Test direct URL access to `/ar/products`, `/ru/blog`, etc.
- [ ] Verify hreflang tags are present on all pages
- [ ] Submit sitemaps for each language to Google Search Console
