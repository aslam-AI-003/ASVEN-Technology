# 🚀 Asven Technology - Deployment Guide

## Build Files Location
Your production-ready files are in the `dist` folder:
```
/Users/slmmzm/Desktop/atoz/dist/
```

## 📁 Files to Upload
Upload ALL files from the `dist` folder to your hosting:
- `index.html`
- `logo.png`
- `favicon.svg`
- `icons.svg`
- `assets/` folder (contains CSS and JS)

---

## 🌐 Deployment Options

### Option 1: Traditional Web Hosting (cPanel, Hostinger, GoDaddy, etc.)

1. **Login to your hosting panel** (cPanel, Plesk, etc.)
2. **Go to File Manager**
3. **Navigate to `public_html` folder**
4. **Upload ALL files from the `dist` folder**
5. **Done!** Your site will be live at asventechnology.com

### Option 2: Netlify (Free & Easy)

1. Go to [netlify.com](https://netlify.com)
2. Sign up / Login
3. Drag and drop the `dist` folder
4. Configure custom domain: asventechnology.com
5. Done!

### Option 3: Vercel (Free & Easy)

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Login
3. Import from folder or drag `dist`
4. Add custom domain: asventechnology.com
5. Done!

### Option 4: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload `dist` folder contents
3. Go to Settings → Pages
4. Select branch and folder
5. Configure custom domain

---

## 🔧 Domain Configuration

### DNS Settings for asventechnology.com:

If using **Netlify**:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

If using **Vercel**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

If using **Traditional Hosting**:
- Point nameservers to your hosting provider
- Or use A record with your server's IP address

---

## 📧 Email Setup (for contact@asventechnology.com)

### Option 1: Google Workspace (Recommended)
1. Sign up at workspace.google.com
2. Add your domain
3. Configure MX records
4. Create email accounts

### Option 2: Zoho Mail (Free)
1. Go to zoho.com/mail
2. Add your domain
3. Configure MX records
4. Create email accounts

### Option 3: Hosting Email
- Most hosting providers include email
- Create emails from cPanel/Plesk

---

## ✅ Post-Deployment Checklist

- [ ] Website loads at asventechnology.com
- [ ] Website loads at www.asventechnology.com
- [ ] SSL certificate is active (https)
- [ ] Logo displays correctly
- [ ] All pages load without errors
- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] Mobile responsive works
- [ ] All links work correctly

---

## 📱 Contact Details Configured

- **Phone:** +91 79043 02297
- **WhatsApp:** +91 77088 88397
- **Email:** info@asventechnology.com
- **Support:** support@asventechnology.com
- **Contact Form:** contact@asventechnology.com

---

## 🔄 Future Updates

To update the website:
1. Make changes in source code
2. Run `npm run build`
3. Upload new `dist` folder contents

---

## Need Help?

If you need assistance with deployment, contact your hosting provider's support team.

**Website developed by: Asven Technology**
