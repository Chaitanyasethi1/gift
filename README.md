# AS PRINT GALLERY — Enterprise Packaging E-Commerce Platform

A production-grade, certified B2B e-commerce platform and real-time 3D box customizer for **AS PRINT GALLERY** (Loni Industrial Area, Ghaziabad, U.P. - 201102; GSTIN: `09AWKPN5910E1ZG`).

---

## 🛠️ Multi-Language Architecture & Tech Stack

- **Frontend Structure**: Semantic HTML5 (16 certified pages with SEO & schema metadata).
- **Styling**: Modern CSS3 Design System with CSS Custom Properties, HSL color tokens, glassmorphism, responsive grid layout, and CSS 3D matrix transforms (`css/style.css`).
- **Client-Side Logic**: Modular JavaScript ES6 (`js/main.js`, `js/api.js`) featuring real-time 3D box canvas controls, square-inch pricing calculator, slide-out cart drawer, and localStorage state persistence.
- **Backend Server**: Node.js & Express REST API (`server.js`) with CORS, JSON body parser, and static file serving.
- **Logistics Integration**: Live tracking AWB generator across BlueDart, Delhivery, DTDC, and SafeXpress.

---

## 📁 Directory Structure

```text
as-print-gallery/
├── assets/                  # High-resolution packaging media & logo
│   ├── images/              # Corrugated boxes, pizza packaging, labels, tags
│   └── icons/               # SVG & icon assets
├── css/
│   └── style.css            # Unified modern CSS design system
├── js/
│   ├── main.js              # Core e-commerce controller & 3D visualizer
│   └── api.js               # REST API client service
├── 404.html                 # Custom 404 error page
├── about.html               # 15,000+ sq.ft factory overview & metrics
├── cart.html                # Dedicated shopping cart with ₹999 free shipping meter
├── certifications.html      # ISO 9001, FSC, IS 2771 (18-24 BF), GSTIN dossier
├── checkout.html            # Multi-step B2B wholesale checkout with GSTIN invoice
├── contact.html             # Direct factory hotline, quote request & Google map
├── cookies.html             # Transparent local storage & privacy policy
├── index.html               # Flagship storefront (Hero first, categories below, 3D builder)
├── order-success.html       # Order receipt generator & direct tracking link
├── privacy.html             # Client artwork non-disclosure confidentiality
├── product-detail.html      # Dynamic PDP with bulk tiered pricing & 3D preview
├── products.html            # 14+ product catalog with Ply & category filters
├── returns-refunds.html     # 100% factory quality guarantee & defect replacement
├── shipping-policy.html     # Pan-India logistics SLA & regional delivery windows
├── terms.html               # B2B commercial terms of sale & BIS tolerances
├── track-order.html         # Real-time logistics tracking portal & 5-step stepper
├── package.json             # Node.js project manifest & dependencies
├── server.js                # Express REST API server & static router
├── vercel.json              # Vercel deployment & immutable cache headers
└── README.md                # Project documentation
```

---

## 🚀 Running Locally

### Option 1: Node.js Express Server (Recommended)
```bash
# Install dependencies
npm install

# Start server
npm start
# or
node server.js
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2: Static Server
```bash
python -m http.server 8080
```
Open [http://localhost:8080/index.html](http://localhost:8080/index.html).

---

## ⚡ REST API Endpoints

- `GET /api/products` — Retrieve all catalog products or filter by category (`?category=corrugated`).
- `GET /api/products/:id` — Retrieve single product by ID.
- `POST /api/calculate-box` — Calculate square-inch cost based on length, width, height, and ply strength.
- `GET /api/track/:orderId` — Fetch live courier milestone logs for any order.
- `POST /api/check-pincode` — Check delivery pincode serviceability and estimated transit time.
- `POST /api/orders` — Log confirmed wholesale orders into factory queue.

---

## 🏭 Business Information
- **Company**: AS PRINT GALLERY
- **Location**: Loni Industrial Area, Ghaziabad, Uttar Pradesh - 201102, India
- **GSTIN**: 09AWKPN5910E1ZG
- **Contact**: +91 8851627221 / +91 9911678386
- **Email**: asprintgallery742@gmail.com
