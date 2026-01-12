# Security Best Practices

## Google Maps API Key

### Current Setup

The Google Maps API key is managed through PHP configuration:

1. **config.php** - Loads the API key from environment or uses fallback
2. **.env** - (Optional) Store your API key here for local development
3. **.env.example** - Template file showing what variables are needed

### Local Development Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your API key:
   ```
   GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. The `.env` file is gitignored and won't be committed to the repository

### Important: Client-Side API Keys Are Public

**The Google Maps JavaScript API key MUST be visible in the browser.** This is by design and normal. The key security measures are:

#### 1. **API Key Restrictions in Google Cloud Console** (CRITICAL)

Set these restrictions on your API key:

**Application Restrictions:**
- Set to "HTTP referrers (web sites)"
- Add your domains:
  ```
  https://micasa.rentals/*
  https://*.micasa.rentals/*
  http://localhost/*  (for local development)
  ```

**API Restrictions:**
- Restrict key to only these APIs:
  - Maps JavaScript API
  - Places API (if needed)
  - Geocoding API (if needed)

#### 2. **Usage Quotas & Billing Alerts**

- Set daily quotas in Google Cloud Console
- Enable billing alerts
- Monitor usage regularly

### Deployment

When deploying to production:

1. **Option A: Use .env file** (if your host supports it)
   - Upload `.env` file to server (outside web root if possible)
   - Ensure it's not web-accessible

2. **Option B: Set environment variables directly** (recommended)
   - Set `GOOGLE_MAPS_API_KEY` as server environment variable
   - Method varies by hosting provider

3. **Option C: Keep in config.php**
   - Update the fallback value in `config.php`
   - Less flexible but works

### Why Can't We Hide Client-Side API Keys?

The Maps JavaScript API runs in the browser, so:
- ✅ Key must be sent to the browser
- ✅ Anyone can view page source and see the key
- ✅ This is expected and normal behavior
- ✅ Google designed the API this way

**The real security comes from:**
1. HTTP referrer restrictions (only your domain can use the key)
2. API restrictions (only specific Google APIs can be called)
3. Usage quotas (prevent abuse)
4. Monitoring and alerts

### Alternative: Server-Side Proxy (Overkill for Most Cases)

If you want to completely hide the API key:
1. Create a PHP endpoint that makes server-side calls to Google Maps APIs
2. Your JavaScript calls your PHP endpoint instead of Google directly
3. PHP uses a server-side API key with IP restrictions

**This is usually unnecessary** for the Maps JavaScript API and adds complexity.

## Other Sensitive Data

- Never commit passwords, database credentials, or other secrets to git
- Use `.env` for all sensitive configuration
- Always add sensitive files to `.gitignore`
