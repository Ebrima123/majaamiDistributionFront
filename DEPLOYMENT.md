# Deployment Guide for Majaami Distribution

This guide will help you deploy the Majaami Distribution website to Vercel or other hosting platforms.

## Prerequisites

- Git account (already set up)
- GitHub account (for Vercel integration)
- Vercel account (optional, for easy deployment)
- Node.js 18+ (for local testing)

---

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Prepare for Deployment

The project is already configured for Vercel deployment. The `vercel.json` file contains all necessary settings.

### Step 2: Connect GitHub to Vercel

1. **Sign in to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in or create an account
   - Authorize with GitHub

2. **Import the Project**
   - Click "New Project" in your Vercel dashboard
   - Select "Continue with GitHub"
   - Find and select `majaamiDistributionFront` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Leave as auto-detected (Next.js)
   - **Build Command**: `npm run build` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Root Directory**: Leave blank (uses root)

4. **Environment Variables**
   - No required variables for basic functionality
   - Optional: Add `NEXT_PUBLIC_SITE_URL` if needed

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - View your live site

### Step 3: Configure Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `majaami.com`)
4. Follow DNS configuration instructions

### Step 4: Set Up Auto-Deployments

**Automatic deployments are enabled by default:**
- Every push to `main` branch triggers automatic deployment
- Vercel creates preview deployments for pull requests
- No additional configuration needed

---

## Option 2: Deploy to Netlify

### Step 1: Connect GitHub

1. Visit [netlify.com](https://netlify.com)
2. Sign in or create account
3. Click "New site from Git"
4. Select GitHub
5. Find `majaamiDistributionFront`

### Step 2: Configure Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x

### Step 3: Deploy

- Click "Deploy site"
- Wait for build to complete
- Netlify auto-deploys on every GitHub push

---

## Option 3: Deploy to Other Platforms

### AWS Amplify

```bash
npm install -g @aws-amplify/cli
amplify init
npm run build
amplify publish
```

### Railway

1. Visit [railway.app](https://railway.app)
2. Connect GitHub repository
3. Auto-detects Next.js configuration
4. Auto-deploys on push

### DigitalOcean App Platform

1. Create new app
2. Select GitHub repository
3. Set build command: `npm run build`
4. Set run command: `npm start`
5. Deploy

---

## Local Testing Before Deployment

### Build and Test

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Visit http://localhost:3000
```

### Verify Build

```bash
# Check build was successful
ls -la .next/

# Test build size
npm run build -- --analyze  # (if needed)
```

---

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All pages are accessible
- [ ] Navigation links work correctly
- [ ] Forms submit successfully
- [ ] Mobile responsive design works
- [ ] Images and icons load properly
- [ ] CSS styling is applied correctly
- [ ] Performance is acceptable

---

## Monitoring & Logs

### Vercel

- **Logs**: Dashboard → Project → Deployments → click deployment → "Logs"
- **Analytics**: Dashboard → Analytics tab
- **Performance**: Vercel → Performance Analytics

### Netlify

- **Logs**: Site settings → Build & deploy → Deploy log
- **Analytics**: Site overview → Analytics
- **Performance**: Built-in Lighthouse checks

---

## Troubleshooting

### Build Fails

**Error: "Cannot find module"**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: "TypeScript errors"**
```bash
# Check type errors locally
npm run type-check

# Fix errors before pushing to GitHub
```

### Site Not Loading

- Check that build was successful
- Verify environment variables are set
- Clear browser cache
- Check browser console for errors

### Performance Issues

- Analyze bundle size: `npm run build`
- Check server logs for errors
- Verify database connections (if applicable)
- Use Lighthouse in DevTools

---

## Updating After Deployment

### To Update the Live Site

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes: `git add . && git commit -m "message"`
4. Push to GitHub: `git push origin main`
5. Vercel automatically deploys the update

### Rollback to Previous Version

**On Vercel:**
1. Dashboard → Project → Deployments
2. Find previous deployment
3. Click the three dots → "Redeploy"

---

## Environment Variables

If you need to add environment variables:

### For Vercel

1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add variable name and value
4. Redeploy for changes to take effect

### Example Variables

```env
# Site configuration
NEXT_PUBLIC_SITE_URL=https://majaami.com

# Add more as needed for future features
```

---

## Custom Domain Setup

### For Vercel

1. Project Settings → Domains
2. Enter your domain
3. Update DNS records:
   - Create CNAME record pointing to Vercel
   - Or use Vercel's nameservers

### DNS Settings Example

**For CNAME:**
```
CNAME  majaami  cname.vercel-dns.com
```

**For Nameservers:**
Use Vercel's nameservers from dashboard

---

## Security

- ✅ Headers configured in `vercel.json`
- ✅ HTTPS enabled by default
- ✅ Content Security Policy ready
- ✅ XSS protection headers set
- ✅ Frame options configured

### Additional Security Steps

1. Enable "Security Headers" in Vercel settings
2. Set up GitHub branch protection
3. Enable two-factor authentication
4. Regular security audits

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Help**: https://docs.github.com
- **Project GitHub**: https://github.com/Ebrima123/majaamiDistributionFront

---

**Last Updated**: 2026-09-18
**Next.js Version**: 14.2.35
**Status**: Production Ready ✅
