# Deployment Checklist for Persis Metal Multi-Language Sites

## Pre-Deployment

### 1. Build All Three Sites
```bash
# Build English site
npm run build:en

# Build Arabic site
npm run build:ar

# Build Russian site
npm run build:ru

# Or build all at once
npm run build:all
```

### 2. Verify Build Output
Ensure the `/dist` folder contains:
```
/dist
├── /en/
│   ├── index.html
│   └── assets/
├── /ar/
│   ├── index.html
│   └── assets/
└── /ru/
    ├── index.html
    └── assets/
```

---

## Server Configuration

### For Nginx:
1. Copy `server-configs/nginx.conf` to `/etc/nginx/sites-available/persismetal`
2. Create symlink: `ln -s /etc/nginx/sites-available/persismetal /etc/nginx/sites-enabled/`
3. Test configuration: `nginx -t`
4. Reload Nginx: `systemctl reload nginx`

### For Apache:
1. Copy `server-configs/.htaccess` to your document root (`/var/www/persismetal/.htaccess`)
2. Ensure `mod_rewrite`, `mod_expires`, `mod_headers`, and `mod_deflate` are enabled
3. Verify `AllowOverride All` is set in your VirtualHost configuration
4. Restart Apache: `systemctl restart apache2`

---

## File Upload

Upload the contents of `/dist` to your server's document root:
```bash
# Example using rsync
rsync -avz dist/ user@yourserver:/var/www/persismetal/
```

---

## SSL Certificate (Required for Production)

### Using Let's Encrypt:
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx  # For Nginx
sudo apt install certbot python3-certbot-apache  # For Apache

# Obtain certificate
sudo certbot --nginx -d persismetal.com -d www.persismetal.com
# OR
sudo certbot --apache -d persismetal.com -d www.persismetal.com
```

---

## Post-Deployment Testing

### 1. Root Domain Redirect
- [ ] Visit `http://persismetal.com` → Should redirect to `https://www.persismetal.com/en/`
- [ ] Visit `http://www.persismetal.com` → Should redirect to `https://www.persismetal.com/en/`
- [ ] Check HTTP status code is 301 (permanent redirect)

### 2. Clean URL Access (No Hash)
- [ ] Visit `https://www.persismetal.com/en/` → Home page loads
- [ ] Visit `https://www.persismetal.com/en/products` → Products page loads
- [ ] Visit `https://www.persismetal.com/en/blog` → Blog page loads
- [ ] Refresh any page → Should NOT return 404

### 3. Language Isolation
- [ ] Visit `https://www.persismetal.com/ar/` → Arabic content displays
- [ ] Visit `https://www.persismetal.com/ru/` → Russian content displays
- [ ] Navigate through each site independently
- [ ] Verify no cross-contamination of content

### 4. SEO Verification
- [ ] View page source on `/en/` → Check `<title>` is in English
- [ ] View page source on `/ar/` → Check `<title>` is in Arabic
- [ ] View page source on `/ru/` → Check `<title>` is in Russian
- [ ] Verify `hreflang` tags present on all pages
- [ ] Verify canonical tags point to correct language version
- [ ] Check Open Graph tags are language-specific

### 5. Browser Developer Tools
- [ ] Open Network tab
- [ ] Navigate to `/en/products` directly
- [ ] Confirm single request to `/en/products` returns 200 (not 404 then 200)
- [ ] Check that `index.html` is served with correct Content-Type

---

## Google Search Console

### Submit Sitemaps
Create and submit separate sitemaps for each language:
- `https://www.persismetal.com/en/sitemap.xml`
- `https://www.persismetal.com/ar/sitemap.xml`
- `https://www.persismetal.com/ru/sitemap.xml`

### International Targeting
- [ ] Verify hreflang tags are correctly implemented
- [ ] Use Google's hreflang testing tool to validate

---

## Monitoring & Maintenance

### Regular Checks
- [ ] Monitor 404 errors in server logs
- [ ] Check Google Search Console for crawl errors
- [ ] Verify SSL certificate expiration dates
- [ ] Test site speed with PageSpeed Insights

### Content Updates
When updating content for a specific language:
1. Edit only that language's `data.json` file
2. Rebuild only that site: `npm run build:en` (or ar/ru)
3. Deploy only the updated subdirectory
4. Other language sites remain unaffected

---

## Troubleshooting

### Issue: Direct URL access returns 404
**Solution:** Verify server configuration (`try_files` for Nginx, RewriteRule for Apache)

### Issue: Root domain doesn't redirect
**Solution:** Check that redirect rules are placed before other location blocks

### Issue: Assets return 404 after deployment
**Solution:** Verify `base` path in Vite config matches subdirectory structure

### Issue: Wrong language content appears
**Solution:** Ensure each site imports its own `data.json` file

---

## Security Hardening (Recommended)

1. **Enable HSTS** (after SSL is confirmed working):
   ```nginx
   add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
   ```

2. **Rate Limiting**:
   ```nginx
   limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;
   ```

3. **Firewall Rules**: Ensure only ports 80 and 443 are open

4. **Regular Updates**: Keep server OS and web server software updated
