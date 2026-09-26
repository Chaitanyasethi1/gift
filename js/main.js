/**
 * AS PRINT GALLERY — Flagship E-Commerce & 3D Interactive Controller
 * Inspried by modern packaging powerhouses (Gurez, Packman, D2C Brands)
 */

// Global State
const STATE = {
  cart: JSON.parse(localStorage.getItem('as_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('as_wishlist') || '[]'),
  appliedCoupon: null,
  activeFilter: 'all',
  pincodeData: null,
  products: [
    {
      id: 'prod-1',
      title: '3-Ply Corrugated Shipping Boxes',
      category: 'corrugated',
      categoryLabel: 'Corrugated Boxes',
      image: 'assets/corrugated_box.jpg',
      price: 6.80,
      moq: 100,
      badge: 'BESTSELLER',
      badgeClass: 'bestseller',
      rating: 4.9,
      reviews: 428,
      specs: ['18-24 BF Kraft', 'Flute B/C', '100% Recyclable'],
      desc: 'High-bursting strength 3-ply brown corrugated cardboard shipping boxes for Amazon, Flipkart, eCommerce, and retail logistics dispatch.',
      tiers: [
        { qty: 100, rate: 8.50 },
        { qty: 500, rate: 7.20 },
        { qty: 1000, rate: 6.80 },
        { qty: 5000, rate: 5.40 }
      ]
    },
    {
      id: 'prod-2',
      title: '5-Ply Heavy-Duty Master Cartons',
      category: 'corrugated',
      categoryLabel: 'Corrugated Boxes',
      image: 'assets/boxes.jpg',
      price: 18.50,
      moq: 50,
      badge: 'HEAVY DUTY',
      badgeClass: 'factory-direct',
      rating: 4.9,
      reviews: 215,
      specs: ['Double Wall 5-Ply', 'Holds 25kg+', 'Logistics Grade'],
      desc: 'Heavy-duty 5-ply double-wall corrugated cartons designed for export, industrial machinery parts, bulk storage, and heavy eCommerce goods.',
      tiers: [
        { qty: 50, rate: 22.00 },
        { qty: 200, rate: 19.50 },
        { qty: 500, rate: 18.50 },
        { qty: 1000, rate: 16.00 }
      ]
    },
    {
      id: 'prod-3',
      title: 'Custom Printed Pizza Packaging Boxes',
      category: 'food',
      categoryLabel: 'Food & Bakery',
      image: 'assets/pizza_box.jpg',
      price: 4.90,
      moq: 500,
      badge: 'HOT SELLER',
      badgeClass: 'discount',
      rating: 4.8,
      reviews: 360,
      specs: ['Food Grade Board', 'Steam Vents', 'Grease Proof'],
      desc: 'Custom branded corrugated pizza boxes with steam vents, food-safe virgin liner, and heat-retaining fluting for cloud kitchens and pizzerias.',
      tiers: [
        { qty: 500, rate: 6.20 },
        { qty: 1000, rate: 5.40 },
        { qty: 2500, rate: 4.90 },
        { qty: 5000, rate: 4.10 }
      ]
    },
    {
      id: 'prod-4',
      title: 'Luxury Sweet & Confectionery Boxes',
      category: 'food',
      categoryLabel: 'Food & Bakery',
      image: 'assets/sweet_box.jpg',
      price: 14.00,
      moq: 250,
      badge: 'GOLD FOIL',
      badgeClass: 'bestseller',
      rating: 5.0,
      reviews: 189,
      specs: ['Rigid Board / Duplex', 'Gold Foil Finish', 'Spot UV'],
      desc: 'Exquisite rigid and folding sweet boxes with gold foil embossing, velvet matte lamination, and food-grade dividers for festive and mithai brands.',
      tiers: [
        { qty: 250, rate: 18.00 },
        { qty: 500, rate: 15.50 },
        { qty: 1000, rate: 14.00 },
        { qty: 2500, rate: 12.20 }
      ]
    },
    {
      id: 'prod-5',
      title: 'Garment & Apparel Packaging Boxes',
      category: 'packaging',
      categoryLabel: 'Custom Packaging',
      image: 'assets/boxes.jpg',
      price: 12.50,
      moq: 200,
      badge: 'PREMIUM',
      badgeClass: 'factory-direct',
      rating: 4.9,
      reviews: 142,
      specs: ['Mono Carton / E-Flute', 'Tuck Top / Flap', 'High Gloss/Matte'],
      desc: 'Custom apparel mono cartons and micro-flute gift boxes for shirts, sarees, t-shirts, and fashion brands with custom full-bleed CMYK printing.',
      tiers: [
        { qty: 200, rate: 15.50 },
        { qty: 500, rate: 13.80 },
        { qty: 1000, rate: 12.50 },
        { qty: 2500, rate: 10.90 }
      ]
    },
    {
      id: 'prod-6',
      title: 'Eco-Friendly Kraft Paper Carry Bags',
      category: 'bags',
      categoryLabel: 'Bags & Mailers',
      image: 'assets/bags.jpg',
      price: 5.20,
      moq: 250,
      badge: 'ECO FRIENDLY',
      badgeClass: 'bestseller',
      rating: 4.8,
      reviews: 290,
      specs: ['140-180 GSM Kraft', 'Twisted Handle', 'Holds 5kg'],
      desc: 'Bio-degradable brown and white kraft shopping bags with reinforced twisted paper handles for retail stores, exhibitions, and boutique brands.',
      tiers: [
        { qty: 250, rate: 6.80 },
        { qty: 500, rate: 5.90 },
        { qty: 1000, rate: 5.20 },
        { qty: 5000, rate: 4.30 }
      ]
    },
    {
      id: 'prod-7',
      title: 'Tamper-Evident Paper Envelopes & Mailers',
      category: 'bags',
      categoryLabel: 'Bags & Mailers',
      image: 'assets/paper_envelope.jpg',
      price: 3.80,
      moq: 200,
      badge: 'PEEL & SEAL',
      badgeClass: 'factory-direct',
      rating: 4.7,
      reviews: 165,
      specs: ['Peel & Seal Strip', 'Water Resistant', 'Document Grade'],
      desc: 'Heavy duty paper mailing envelopes with hot-melt destructive adhesive strip for secure courier shipments, legal documents, and small e-commerce orders.',
      tiers: [
        { qty: 200, rate: 4.80 },
        { qty: 500, rate: 4.20 },
        { qty: 1000, rate: 3.80 },
        { qty: 5000, rate: 3.10 }
      ]
    },
    {
      id: 'prod-8',
      title: 'High-Density Woven Garment Labels',
      category: 'label',
      categoryLabel: 'Labels & Tags',
      image: 'assets/woven_label.jpg',
      price: 0.85,
      moq: 1000,
      badge: 'DAMASK WEAVE',
      badgeClass: 'bestseller',
      rating: 5.0,
      reviews: 512,
      specs: ['High-Density Damask', 'Ultrasonic Soft Cut', 'Fade-Proof'],
      desc: 'Ultra-soft damask woven apparel neck labels with non-itch ultrasonic sealed borders. Supports up to 8 custom dyed yarn colors.',
      tiers: [
        { qty: 1000, rate: 1.20 },
        { qty: 2500, rate: 0.98 },
        { qty: 5000, rate: 0.85 },
        { qty: 10000, rate: 0.65 }
      ]
    },
    {
      id: 'prod-9',
      title: 'Printed Satin & Cotton Wash-Care Labels',
      category: 'label',
      categoryLabel: 'Labels & Tags',
      image: 'assets/labels.jpg',
      price: 0.65,
      moq: 1000,
      badge: 'WASH PROOF',
      badgeClass: 'factory-direct',
      rating: 4.9,
      reviews: 310,
      specs: ['Pure White Satin/Cotton', 'Wash-Proof Inks', 'Rotary Print'],
      desc: 'Silky smooth satin and cotton wash-care instruction labels, barcode size tabs, and international symbol printing for apparel exports.',
      tiers: [
        { qty: 1000, rate: 0.90 },
        { qty: 2500, rate: 0.75 },
        { qty: 5000, rate: 0.65 },
        { qty: 10000, rate: 0.48 }
      ]
    },
    {
      id: 'prod-10',
      title: 'Custom Brand Hang Tags & Swing Tickets',
      category: 'label',
      categoryLabel: 'Labels & Tags',
      image: 'assets/tags.jpg',
      price: 1.20,
      moq: 500,
      badge: 'DIE-CUT SHAPES',
      badgeClass: 'bestseller',
      rating: 4.9,
      reviews: 440,
      specs: ['350-600 GSM Card', 'Eyelet + String', 'Matte/Gloss/UV'],
      desc: 'Custom shaped apparel hang tags, price tickets, and denim brand tags with metal eyelets, custom die-cutting, spot UV, and luxury cord attachments.',
      tiers: [
        { qty: 500, rate: 1.70 },
        { qty: 1000, rate: 1.40 },
        { qty: 2500, rate: 1.20 },
        { qty: 5000, rate: 0.95 }
      ]
    },
    {
      id: 'prod-11',
      title: 'Custom Die-Cut Gumming Paper Stickers',
      category: 'sticker',
      categoryLabel: 'Stickers & Labels',
      image: 'assets/gumming.jpg',
      price: 0.45,
      moq: 1000,
      badge: 'HIGH TACK',
      badgeClass: 'factory-direct',
      rating: 4.8,
      reviews: 230,
      specs: ['Chromo Gumming', 'Strong Permanent Tack', 'Sheet/Roll'],
      desc: 'Mirror-coat chromo gumming stickers for box packaging seals, brand logos, product packaging, and envelope closure seals.',
      tiers: [
        { qty: 1000, rate: 0.70 },
        { qty: 2500, rate: 0.55 },
        { qty: 5000, rate: 0.45 },
        { qty: 10000, rate: 0.32 }
      ]
    },
    {
      id: 'prod-12',
      title: 'Waterproof Vinyl & Branding Stickers',
      category: 'sticker',
      categoryLabel: 'Stickers & Labels',
      image: 'assets/stickers.jpg',
      price: 1.10,
      moq: 500,
      badge: 'WATERPROOF',
      badgeClass: 'bestseller',
      rating: 4.9,
      reviews: 380,
      specs: ['100% PVC Vinyl', 'UV & Scratch Proof', 'Custom Die-Cut'],
      desc: 'Outdoor-grade waterproof vinyl decals, laptop stickers, bottle branding labels, and die-cut promo stickers that never peel or fade.',
      tiers: [
        { qty: 500, rate: 1.60 },
        { qty: 1000, rate: 1.30 },
        { qty: 2500, rate: 1.10 },
        { qty: 5000, rate: 0.85 }
      ]
    },
    {
      id: 'prod-13',
      title: 'Industrial Barcode & Thermal Roll Labels',
      category: 'sticker',
      categoryLabel: 'Stickers & Labels',
      image: 'assets/barcode_sticker.jpg',
      price: 0.30,
      moq: 2000,
      badge: 'ZEBRA COMPATIBLE',
      badgeClass: 'factory-direct',
      rating: 4.8,
      reviews: 195,
      specs: ['Direct Thermal / TT', 'Universal Printer Core', 'Smudge Proof'],
      desc: 'Direct thermal and thermal transfer roll labels for warehouse shipping barcodes, Amazon FBA labels, and retail POS barcode scanners.',
      tiers: [
        { qty: 2000, rate: 0.45 },
        { qty: 5000, rate: 0.36 },
        { qty: 10000, rate: 0.30 },
        { qty: 25000, rate: 0.22 }
      ]
    },
    {
      id: 'prod-14',
      title: 'Custom Bottle & Jar Packaging Labels',
      category: 'sticker',
      categoryLabel: 'Stickers & Labels',
      image: 'assets/bottle_label.jpg',
      price: 0.90,
      moq: 500,
      badge: 'OIL RESISTANT',
      badgeClass: 'discount',
      rating: 4.9,
      reviews: 210,
      specs: ['Clear BOPP / Metallic', 'Moisture Proof', 'High Precision Die'],
      desc: 'Water, oil, and chemical resistant bottle labels for cosmetics, juices, honey, spices, sanitizers, and glass/PET jars.',
      tiers: [
        { qty: 500, rate: 1.40 },
        { qty: 1000, rate: 1.10 },
        { qty: 2500, rate: 0.90 },
        { qty: 5000, rate: 0.70 }
      ]
    },
    {
      id: 'prod-15',
      title: 'Tagless Heat Transfer Garment Labels',
      category: 'label',
      categoryLabel: 'Labels & Tags',
      image: 'assets/heat_transfer.jpg',
      price: 1.40,
      moq: 500,
      badge: 'TAGLESS COMFORT',
      badgeClass: 'factory-direct',
      rating: 5.0,
      reviews: 175,
      specs: ['Silicone / Plastisol', 'High Elastic Stretch', 'Zero-Feel Skin'],
      desc: 'Zero-itch heat transfer neck prints for t-shirts, activewear, sportswear, and undergarments applied cleanly in 10-12 seconds with heat press.',
      tiers: [
        { qty: 500, rate: 1.90 },
        { qty: 1000, rate: 1.60 },
        { qty: 2500, rate: 1.40 },
        { qty: 5000, rate: 1.10 }
      ]
    }
  ]
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initLiveSearch();
  initCartDrawer();
  initBox3DBuilder();
  initProductGrid();
  initQuickViewModal();
  initPincodeChecker();
  initSampleKitModal();
  initCheckoutModal();
  initFaqAccordion();
  initRecentOrdersTicker();
  initMobileNavigation();
  initScrollTopAndToast();
  initWishlist();
  updateBadgeCounts();
});

/* =========================================
   1. LIVE SEARCH & AUTOCOMPLETE
   ========================================= */
function initLiveSearch() {
  const searchInput = document.getElementById('site-search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  if (!searchInput || !searchDropdown) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchDropdown.classList.remove('active');
      searchDropdown.innerHTML = '';
      return;
    }

    const matched = STATE.products.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.specs.some(s => s.toLowerCase().includes(query))
    );

    if (matched.length === 0) {
      searchDropdown.innerHTML = `
        <div style="padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No packaging products found for "<strong>${escapeHtml(query)}</strong>".<br>
          <a href="products.html" style="color: var(--primary); font-weight: 700; margin-top: 6px; display: inline-block;">Browse Full Catalogue →</a>
        </div>
      `;
    } else {
      searchDropdown.innerHTML = matched.slice(0, 6).map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.title}" class="search-result-thumb">
          <div class="search-result-info">
            <div class="search-result-title">${p.title}</div>
            <div class="search-result-meta">
              <span>${p.categoryLabel}</span> • <span>MOQ: ${p.moq} pcs</span>
            </div>
          </div>
          <div class="search-result-price">₹${p.price.toFixed(2)}/pc</div>
        </div>
      `).join('');

      searchDropdown.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-id');
          window.location.href = `product-detail.html?id=${id}`;
        });
      });
    }

    searchDropdown.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove('active');
    }
  });
}

/* =========================================
   2. INTERACTIVE 3D BOX BUILDER & COST CALCULATOR
   ========================================= */
function initBox3DBuilder() {
  const container = document.getElementById('box-builder-container');
  if (!container) return;

  // Configuration Inputs
  const lengthInput = document.getElementById('box-len');
  const widthInput = document.getElementById('box-width');
  const heightInput = document.getElementById('box-height');
  const unitBtns = document.querySelectorAll('.unit-toggle-btn');
  const plyBtns = document.querySelectorAll('.ply-select-btn');
  const colorBtns = document.querySelectorAll('.color-select-btn');
  const printBtns = document.querySelectorAll('.print-select-btn');
  const flapToggleBtn = document.getElementById('toggle-flaps-btn');

  // Live Displays
  const livePriceDisplay = document.getElementById('builder-live-price');
  const bulkTierCards = document.querySelectorAll('.builder-tier-card');
  const addCustomCartBtn = document.getElementById('btn-add-custom-box-cart');
  const customWaBtn = document.getElementById('btn-custom-box-whatsapp');

  // 3D Box Element
  const cssBox = document.getElementById('css-3d-interactive-box');
  const canvasViewport = document.getElementById('canvas-3d-viewport');

  // Custom Branding
  const customBoxText = document.getElementById('custom-box-text');
  const customBoxColor = document.getElementById('custom-box-color');
  const boxFrontTextDisplay = document.getElementById('box-front-text-display');

  let config = {
    length: parseFloat(lengthInput?.value || 10),
    width: parseFloat(widthInput?.value || 8),
    height: parseFloat(heightInput?.value || 6),
    unit: 'in',
    ply: 3,
    plyMultiplier: 1.0,
    color: 'kraft',
    colorMultiplier: 1.0,
    print: 'plain',
    printAddon: 0.0,
    flapsOpen: false,
    selectedQty: 500
  };

  // 3D Drag Rotation Logic
  let isDragging = false;
  let rotX = -20;
  let rotY = 35;
  let startX, startY;

  if (canvasViewport && cssBox) {
    canvasViewport.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      rotY += deltaX * 0.4;
      rotX -= deltaY * 0.4;
      rotX = Math.max(-80, Math.min(80, rotX));
      cssBox.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      startX = e.clientX;
      startY = e.clientY;
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    // Touch support for mobile
    canvasViewport.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches[0]) return;
      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;
      rotY += deltaX * 0.5;
      rotX -= deltaY * 0.5;
      rotX = Math.max(-80, Math.min(80, rotX));
      cssBox.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', () => { isDragging = false; });
  }

  // Dimension Change Listeners
  [lengthInput, widthInput, heightInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      config.length = Math.max(2, parseFloat(lengthInput.value) || 10);
      config.width = Math.max(2, parseFloat(widthInput.value) || 8);
      config.height = Math.max(2, parseFloat(heightInput.value) || 6);
      update3DBoxDimensions();
      calculateBoxPricing();
    });
  });

  // Ply Selector
  plyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      plyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      config.ply = parseInt(btn.getAttribute('data-ply') || '3');
      config.plyMultiplier = parseFloat(btn.getAttribute('data-multiplier') || '1.0');
      calculateBoxPricing();
    });
  });

  // Color Selector
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const color = btn.getAttribute('data-color') || 'kraft';
      config.color = color;
      config.colorMultiplier = parseFloat(btn.getAttribute('data-multiplier') || '1.0');
      
      if (cssBox) {
        cssBox.className = `css-3d-box theme-${color}`;
        // Clear custom inline color
        const faces = cssBox.querySelectorAll('.box-face');
        faces.forEach(f => f.style.backgroundColor = '');
      }
      calculateBoxPricing();
    });
  });

  // Custom Text & Color Interactivity
  if (customBoxText && boxFrontTextDisplay) {
    customBoxText.addEventListener('input', () => {
      boxFrontTextDisplay.textContent = customBoxText.value;
    });
  }

  if (customBoxColor) {
    customBoxColor.addEventListener('input', () => {
      if (!cssBox) return;
      colorBtns.forEach(b => b.classList.remove('active')); // Deselect predefined themes
      const faces = cssBox.querySelectorAll('.box-face');
      faces.forEach(f => {
        f.style.backgroundColor = customBoxColor.value;
      });
      // Set to custom theme state for pricing (optional, maybe keep last multiplier)
      cssBox.className = `css-3d-box`; // Remove theme class
    });
  }

  // Printing Selector
  printBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      printBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      config.print = btn.getAttribute('data-print') || 'plain';
      config.printAddon = parseFloat(btn.getAttribute('data-addon') || '0.0');
      calculateBoxPricing();
    });
  });

  // Flaps Open/Close Toggle
  if (flapToggleBtn) {
    flapToggleBtn.addEventListener('click', () => {
      config.flapsOpen = !config.flapsOpen;
      flapToggleBtn.textContent = config.flapsOpen ? '📦 Close Flaps' : '👐 Open Flaps';
      const topFace = cssBox ? cssBox.querySelector('.face-top') : null;
      if (topFace) {
        topFace.style.transform = config.flapsOpen 
          ? 'rotateX(170deg) translateZ(80px)' 
          : 'rotateX(90deg) translateZ(80px)';
      }
    });
  }

  // Tier Quantities Click
  bulkTierCards.forEach(card => {
    card.addEventListener('click', () => {
      bulkTierCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      config.selectedQty = parseInt(card.getAttribute('data-qty') || '500');
      calculateBoxPricing();
    });
  });

  function update3DBoxDimensions() {
    if (!cssBox) return;
    const l = Math.min(260, Math.max(120, config.length * 16));
    const w = Math.min(220, Math.max(100, config.width * 16));
    const h = Math.min(200, Math.max(90, config.height * 16));

    const front = cssBox.querySelector('.face-front');
    const back = cssBox.querySelector('.face-back');
    const right = cssBox.querySelector('.face-right');
    const left = cssBox.querySelector('.face-left');
    const top = cssBox.querySelector('.face-top');
    const bottom = cssBox.querySelector('.face-bottom');

    if (front && back && right && left && top && bottom) {
      front.style.width = `${l}px`;
      front.style.height = `${h}px`;
      front.style.transform = `translateZ(${w / 2}px)`;

      back.style.width = `${l}px`;
      back.style.height = `${h}px`;
      back.style.transform = `rotateY(180deg) translateZ(${w / 2}px)`;

      right.style.width = `${w}px`;
      right.style.height = `${h}px`;
      right.style.transform = `rotateY(90deg) translateZ(${l / 2}px)`;

      left.style.width = `${w}px`;
      left.style.height = `${h}px`;
      left.style.transform = `rotateY(-90deg) translateZ(${l / 2}px)`;

      top.style.width = `${l}px`;
      top.style.height = `${w}px`;
      top.style.transform = `rotateX(90deg) translateZ(${h / 2}px)`;

      bottom.style.width = `${l}px`;
      bottom.style.height = `${w}px`;
      bottom.style.transform = `rotateX(-90deg) translateZ(${h / 2}px)`;
    }
  }

  function calculateBoxPricing() {
    // Surface Area Formula for regular slotted carton (sq inches):
    // 2 * (L + W) * (W + H)
    const L = config.length;
    const W = config.width;
    const H = config.height;
    const sqInches = 2 * (L + W) * (W + H);

    // Base cost per sq inch: ~ ₹0.024
    let baseRate = sqInches * 0.024;
    baseRate = Math.max(4.20, baseRate); // minimum baseline
    baseRate *= config.plyMultiplier;
    baseRate *= config.colorMultiplier;
    baseRate += config.printAddon;

    // Bulk tier discounts
    const tiers = [
      { qty: 100, discount: 0.0 },
      { qty: 500, discount: 0.22 },
      { qty: 1000, discount: 0.36 },
      { qty: 5000, discount: 0.50 }
    ];

    tiers.forEach(t => {
      const tierRate = Math.max(2.80, baseRate * (1 - t.discount));
      const tierEl = document.querySelector(`.builder-tier-card[data-qty="${t.qty}"] .tier-rate`);
      if (tierEl) {
        tierEl.textContent = `₹${tierRate.toFixed(2)}`;
      }
    });

    const activeTier = tiers.find(t => t.qty === config.selectedQty) || tiers[1];
    const currentRate = Math.max(2.80, baseRate * (1 - activeTier.discount));

    if (livePriceDisplay) {
      livePriceDisplay.textContent = `₹${currentRate.toFixed(2)}`;
    }

    // Update Action Buttons
    if (customWaBtn) {
      const msg = `Hello AS Print Gallery! I customized a box on your website:
📦 *Custom Corrugated Box Specification*
• Dimensions: ${config.length}" × ${config.width}" × ${config.height}" (${config.unit})
• Flute / Ply: ${config.ply}-Ply Corrugated
• Material: ${capitalize(config.color)}
• Printing: ${capitalize(config.print)}
• Order Quantity: ${config.selectedQty} pcs
• Estimated Unit Rate: ₹${currentRate.toFixed(2)}/pc
• Estimated Subtotal: ₹${(currentRate * config.selectedQty).toFixed(0)} + GST
Please confirm sample delivery and final factory quote!`;

      customWaBtn.href = `https://wa.me/919911678386?text=${encodeURIComponent(msg)}`;
    }

    if (addCustomCartBtn) {
      addCustomCartBtn.onclick = () => {
        addToCart({
          id: `custom-box-${Date.now()}`,
          title: `Custom ${config.ply}-Ply Box (${config.length}"×${config.width}"×${config.height}")`,
          image: config.color === 'white' ? 'assets/pizza_box.jpg' : 'assets/corrugated_box.jpg',
          price: currentRate,
          qty: config.selectedQty,
          specs: `${config.ply}-Ply | ${capitalize(config.color)} | ${capitalize(config.print)}`
        });
        showToast(`Added ${config.selectedQty}x Custom Boxes to Cart! 🛒`);
        openCartDrawer();
      };
    }
  }

  // Initial Run
  update3DBoxDimensions();
  calculateBoxPricing();
}

/* =========================================
   3. PRODUCT CATALOGUE & FILTERING
   ========================================= */
function initProductGrid() {
  const container = document.getElementById('products-grid-container');
  const filterTabs = document.querySelectorAll('.filter-tab-pill');
  if (!container) return;

  function renderGrid(filter = 'all') {
    const list = filter === 'all' 
      ? STATE.products 
      : STATE.products.filter(p => p.category === filter);

    container.innerHTML = list.map(p => `
      <div class="product-card" data-id="${p.id}" data-category="${p.category}">
        <div class="product-thumb-wrap">
          <a href="product-detail.html?id=${p.id}">
            <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy">
          </a>
          
          <div class="product-badge-overlay">
            ${p.badge ? `<span class="badge-tag ${p.badgeClass}">${p.badge}</span>` : ''}
          </div>

          <button class="btn-wishlist-toggle ${STATE.wishlist.includes(p.id) ? 'active' : ''}" 
                  data-wishlist="${p.id}" 
                  aria-label="Save to Wishlist">
            ${STATE.wishlist.includes(p.id) ? '❤️' : '🤍'}
          </button>

          <div class="product-quick-overlay" onclick="document.querySelector('.btn-quick-view[data-quickview=\'${p.id}\']').click();" style="cursor:pointer;">
            <button class="btn-quick-view" data-quickview="${p.id}" title="Quick View" aria-label="Quick View">
              👁️
            </button>
          </div>
        </div>

        <div class="product-details">
          <div class="product-cat-label">${p.categoryLabel}</div>
          <h3 class="product-title" title="${p.title}">
            <a href="product-detail.html?id=${p.id}">${p.title}</a>
          </h3>
          
          <div class="product-rating-row">
            <span class="star-icons">★★★★★</span>
            <span class="rating-score">${p.rating}</span>
            <span class="reviews-count">(${p.reviews})</span>
          </div>

          <div class="product-specs-chips">
            ${p.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}
          </div>

          <div class="product-pricing-row">
            <div class="price-main">
              <span class="price-from-label">Wholesale from</span>
              <div class="price-amount">₹${p.price.toFixed(2)} <span class="unit">/ pc</span></div>
            </div>
            <div class="moq-tag">MOQ: ${p.moq} pcs</div>
          </div>

          <div class="product-card-actions">
            <button class="btn-card-cart" data-addcart="${p.id}">
              🛒 Add to Cart
            </button>
            <a class="btn-card-wa" 
               href="https://wa.me/919911678386?text=${encodeURIComponent(`Hi AS Print Gallery! I want to order "${p.title}" (MOQ: ${p.moq} pcs). Please share quotation and delivery timeline.`)}" 
               target="_blank" 
               rel="noopener">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Action Listeners
    container.querySelectorAll('[data-quickview]').forEach(btn => {
      btn.addEventListener('click', () => openQuickView(btn.getAttribute('data-quickview')));
    });

    container.querySelectorAll('[data-addcart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-addcart');
        const prod = STATE.products.find(p => p.id === id);
        if (prod) {
          addToCart({
            id: prod.id,
            title: prod.title,
            image: prod.image,
            price: prod.price,
            qty: prod.moq,
            specs: `MOQ Tier: ${prod.moq} pcs`
          });
          showToast(`Added ${prod.moq}x ${prod.title} to Cart! 🛒`);
          openCartDrawer();
        }
      });
    });

    container.querySelectorAll('[data-wishlist]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-wishlist');
        toggleWishlist(id);
        btn.innerHTML = STATE.wishlist.includes(id) ? '❤️' : '🤍';
        btn.classList.toggle('active', STATE.wishlist.includes(id));
      });
    });
  }

  // Filter Tabs Event Listeners
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter') || 'all';
      STATE.activeFilter = cat;
      renderGrid(cat);
    });
  });

  // Check URL parameter for filter
  const urlParam = new URLSearchParams(window.location.search).get('filter');
  if (urlParam) {
    const matchingTab = document.querySelector(`.filter-tab-pill[data-filter="${urlParam}"]`);
    if (matchingTab) {
      matchingTab.click();
      return;
    }
  }

  renderGrid('all');
}

/* =========================================
   4. SLIDE-OUT CART DRAWER & CHECKOUT
   ========================================= */
function initCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  const openBtns = document.querySelectorAll('[data-open-cart]');
  const closeBtn = document.getElementById('cart-close-btn');
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  const couponInput = document.getElementById('cart-coupon-input');
  const waCheckoutBtn = document.getElementById('btn-cart-whatsapp-checkout');
  const regularCheckoutBtn = document.getElementById('btn-cart-regular-checkout');

  if (openBtns) {
    openBtns.forEach(b => b.addEventListener('click', openCartDrawer));
  }
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (code === 'WELCOME10') {
        STATE.appliedCoupon = { code: 'WELCOME10', rate: 0.10, desc: '10% Welcome Discount' };
        showToast('🎉 Coupon WELCOME10 applied! 10% discount added.');
      } else if (code === 'BULK20') {
        STATE.appliedCoupon = { code: 'BULK20', rate: 0.20, desc: '20% Bulk Order Discount' };
        showToast('🔥 Coupon BULK20 applied! 20% discount added.');
      } else {
        showToast('Invalid coupon code. Try WELCOME10 or BULK20');
      }
      renderCartDrawer();
    });
  }

  if (waCheckoutBtn) {
    waCheckoutBtn.addEventListener('click', () => {
      if (STATE.cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      const summary = generateCartWhatsAppText();
      window.open(`https://wa.me/919911678386?text=${encodeURIComponent(summary)}`, '_blank');
    });
  }

  if (regularCheckoutBtn) {
    regularCheckoutBtn.addEventListener('click', () => {
      if (STATE.cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      window.location.href = 'checkout.html';
    });
  }

  renderCartDrawer();
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function addToCart(item) {
  const existing = STATE.cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += item.qty;
  } else {
    STATE.cart.push(item);
  }
  saveCart();
  renderCartDrawer();
  updateBadgeCounts();
}

function updateCartQty(id, delta) {
  const item = STATE.cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    STATE.cart = STATE.cart.filter(c => c.id !== id);
  }
  saveCart();
  renderCartDrawer();
  updateBadgeCounts();
}

function removeFromCart(id) {
  STATE.cart = STATE.cart.filter(c => c.id !== id);
  saveCart();
  renderCartDrawer();
  updateBadgeCounts();
  showToast('Item removed from cart');
}

function saveCart() {
  localStorage.setItem('as_cart', JSON.stringify(STATE.cart));
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-val');
  const gstEl = document.getElementById('cart-gst-val');
  const totalEl = document.getElementById('cart-final-total-val');
  const progressFill = document.getElementById('cart-shipping-progress');
  const shippingText = document.getElementById('cart-shipping-text');

  if (!container) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your Cart is Empty</h3>
        <p style="font-size: 0.85rem; margin-top: 6px;">Explore our 14 factory-manufactured packaging products.</p>
        <a href="products.html" class="btn-primary-hero" style="margin-top: 18px; font-size: 0.85rem; padding: 10px 20px;">
          Start Shopping →
        </a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0.00';
    if (gstEl) gstEl.textContent = '₹0.00';
    if (totalEl) totalEl.textContent = '₹0.00';
    if (progressFill) progressFill.style.width = '0%';
    if (shippingText) shippingText.textContent = 'Add ₹999 for FREE Pan-India Shipping';
    if (discountRow) discountRow.style.display = 'none';
    return;
  }

  container.innerHTML = STATE.cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.title}</div>
        <div class="cart-item-spec">${item.specs || ''}</div>
        <div class="cart-item-bottom">
          <div class="cart-qty-spinner">
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -10)">-</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 10)">+</button>
          </div>
          <div style="display: flex; align-items: center;">
            <div class="cart-item-price">₹${(item.price * item.qty).toFixed(2)}</div>
            <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove">✕</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Calculate Totals
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;
  if (STATE.appliedCoupon) {
    discount = subtotal * STATE.appliedCoupon.rate;
    if (discountRow && discountEl) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-₹${discount.toFixed(2)} (${STATE.appliedCoupon.code})`;
    }
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const taxableAmount = Math.max(0, subtotal - discount);
  const gst = taxableAmount * 0.18; // 18% standard GST for corrugated / print
  const shipping = taxableAmount >= 999 ? 0 : 99;
  const grandTotal = taxableAmount + gst + shipping;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
  if (gstEl) gstEl.textContent = `₹${gst.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `₹${grandTotal.toFixed(2)}`;

  // Shipping Progress
  if (progressFill && shippingText) {
    const progress = Math.min(100, (taxableAmount / 999) * 100);
    progressFill.style.width = `${progress}%`;
    if (taxableAmount >= 999) {
      shippingText.innerHTML = '🎉 <strong>FREE PAN-INDIA DELIVERY UNLOCKED!</strong>';
    } else {
      const remaining = 999 - taxableAmount;
      shippingText.innerHTML = `Add <strong>₹${remaining.toFixed(0)}</strong> more for <strong>FREE Pan-India Shipping!</strong>`;
    }
  }
}

function generateCartWhatsAppText() {
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = STATE.appliedCoupon ? subtotal * STATE.appliedCoupon.rate : 0;
  const grandTotal = (subtotal - discount) * 1.18;

  let msg = `🛒 *NEW WHOLESALE ORDER — AS PRINT GALLERY WEBSITE*\n`;
  msg += `-------------------------------------------\n`;
  STATE.cart.forEach((c, idx) => {
    msg += `${idx + 1}. *${c.title}*\n`;
    msg += `   Qty: ${c.qty} pcs | Rate: ₹${c.price.toFixed(2)}/pc | ₹${(c.price * c.qty).toFixed(2)}\n`;
    if (c.specs) msg += `   Specs: ${c.specs}\n`;
  });
  msg += `-------------------------------------------\n`;
  msg += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
  if (STATE.appliedCoupon) {
    msg += `Discount (${STATE.appliedCoupon.code}): -₹${discount.toFixed(2)}\n`;
  }
  msg += `GST (18%): ₹${((subtotal - discount) * 0.18).toFixed(2)}\n`;
  msg += `*ESTIMATED TOTAL: ₹${grandTotal.toFixed(2)}*\n\n`;
  msg += `📍 Please confirm dispatch date and factory bank/UPI details!`;
  return msg;
}

/* =========================================
   5. QUICK VIEW MODAL
   ========================================= */
function initQuickViewModal() {
  const modal = document.getElementById('quickview-modal');
  const closeBtn = document.getElementById('quickview-close-btn');
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

function openQuickView(productId) {
  const modal = document.getElementById('quickview-modal');
  const body = document.getElementById('quickview-content-body');
  const prod = STATE.products.find(p => p.id === productId);
  if (!modal || !body || !prod) return;

  body.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-img-box">
        <img src="${prod.image}" alt="${prod.title}">
      </div>

      <div class="quickview-details-box">
        <div class="product-cat-label">${prod.categoryLabel}</div>
        <h2 style="font-size: 1.45rem; margin-bottom: 8px;">${prod.title}</h2>
        
        <div class="product-rating-row" style="margin-bottom: 14px;">
          <span class="star-icons">★★★★★</span>
          <span class="rating-score">${prod.rating}</span>
          <span class="reviews-count">(${prod.reviews} Verified Industrial Buyers)</span>
        </div>

        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 18px;">
          ${prod.desc}
        </p>

        <!-- Tiered Pricing Table -->
        <div style="background: var(--off-white); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px; border: 1px solid var(--border-light);">
          <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
            Factory Bulk Wholesale Tiers
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; text-align: center;">
            ${prod.tiers.map(t => `
              <div style="background: #FFFFFF; padding: 6px; border-radius: 6px; border: 1px solid var(--border-light);">
                <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">${t.qty}+ pcs</div>
                <div style="font-size: 0.88rem; font-weight: 800; color: var(--primary);">₹${t.rate.toFixed(2)}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 22px;">
          <div style="font-family: 'Inter', sans-serif; font-size: 1.7rem; font-weight: 700; color: var(--text-dark);">
            ₹${prod.price.toFixed(2)} <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">/ piece</span>
          </div>
          <span class="moq-tag">Minimum Order: ${prod.moq} pcs</span>
        </div>

        <div style="display: flex; gap: 10px; margin-top: auto;">
          <button class="btn-primary-hero" id="quickview-add-cart-btn" style="flex: 1; justify-content: center; font-size: 0.9rem;">
            🛒 Add ${prod.moq} pcs to Cart
          </button>
          <a class="btn-cart-whatsapp" 
             style="padding: 12px 18px; border-radius: var(--radius-full);"
             href="https://wa.me/919911678386?text=${encodeURIComponent(`Hi AS Print Gallery! I am looking for details & bulk pricing for "${prod.title}".`)}" 
             target="_blank" 
             rel="noopener">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('quickview-add-cart-btn')?.addEventListener('click', () => {
    addToCart({
      id: prod.id,
      title: prod.title,
      image: prod.image,
      price: prod.price,
      qty: prod.moq,
      specs: `Wholesale Tier: ${prod.moq} pcs`
    });
    modal.classList.remove('active');
    showToast(`Added ${prod.moq}x ${prod.title} to Cart! 🛒`);
    openCartDrawer();
  });

  modal.classList.add('active');
}

/* =========================================
   6. PINCODE DELIVERY ESTIMATOR
   ========================================= */
function initPincodeChecker() {
  const modal = document.getElementById('pincode-modal');
  const triggerBtns = document.querySelectorAll('[data-open-pincode]');
  const closeBtn = document.getElementById('pincode-close-btn');
  const submitBtn = document.getElementById('pincode-check-submit');
  const input = document.getElementById('pincode-input-field');
  const resultBox = document.getElementById('pincode-result-box');

  if (triggerBtns) {
    triggerBtns.forEach(b => b.addEventListener('click', () => modal?.classList.add('active')));
  }
  if (closeBtn) closeBtn.addEventListener('click', () => modal?.classList.remove('active'));
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (submitBtn && input && resultBox) {
    submitBtn.addEventListener('click', () => {
      const pin = input.value.trim();
      if (!/^\d{6}$/.test(pin)) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `<span style="color: var(--brand-red); font-weight: 700;">Please enter a valid 6-digit Indian Pincode.</span>`;
        return;
      }

      let speed = '2-3 Business Days';
      let zone = 'Express Courier';
      if (pin.startsWith('11') || pin.startsWith('20') || pin.startsWith('12')) {
        speed = 'Same-Day or Next-Day Dispatch (Delhi NCR)';
        zone = 'Local Direct Factory Courier';
      } else if (pin.startsWith('40') || pin.startsWith('56') || pin.startsWith('70') || pin.startsWith('60')) {
        speed = '2 Days Air Cargo / Surface Express';
        zone = 'Metro Corridor';
      }

      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: var(--radius-sm); padding: 14px; text-align: left;">
          <div style="color: #15803D; font-weight: 800; font-size: 0.95rem; margin-bottom: 4px;">
            ✅ Serviceable Pincode: ${pin}
          </div>
          <div style="font-size: 0.85rem; color: var(--text-dark); margin-bottom: 2px;">
            <strong>Estimated Delivery:</strong> ${speed}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">
            Logistics: BlueDart, Delhivery, DTDC Surface & Air Cargo. Cash on Delivery available for verified businesses.
          </div>
        </div>
      `;

      // Update Top Nav button
      const topPincodeDisplay = document.getElementById('top-pincode-display');
      if (topPincodeDisplay) {
        topPincodeDisplay.textContent = `📍 ${pin} (${speed.split(' ')[0]})`;
      }
    });
  }
}

/* =========================================
   7. SAMPLE KIT REQUEST MODAL
   ========================================= */
function initSampleKitModal() {
  const modal = document.getElementById('sample-modal');
  const triggerBtns = document.querySelectorAll('[data-open-sample]');
  const closeBtn = document.getElementById('sample-close-btn');
  const form = document.getElementById('sample-kit-form');

  if (triggerBtns) {
    triggerBtns.forEach(b => b.addEventListener('click', () => modal?.classList.add('active')));
  }
  if (closeBtn) closeBtn.addEventListener('click', () => modal?.classList.remove('active'));
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('sample-company')?.value || 'Valued Business';
      const phone = document.getElementById('sample-phone')?.value || '';
      const items = document.getElementById('sample-products-select')?.value || 'Packaging Samples';

      const msg = `Hello AS Print Gallery! I am requesting a Free Physical Sample Kit for my company:
Company Name: ${company}
Contact Number: ${phone}
Samples Needed: ${items}
Please dispatch the sample swatch kit to my address.`;

      window.open(`https://wa.me/919911678386?text=${encodeURIComponent(msg)}`, '_blank');
      modal?.classList.remove('active');
      showToast('Sample kit request forwarded to dispatch team! 📦');
    });
  }
}

/* =========================================
   8. CHECKOUT MODAL
   ========================================= */
function initCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const closeBtn = document.getElementById('checkout-close-btn');
  const form = document.getElementById('checkout-order-form');

  if (closeBtn) closeBtn.addEventListener('click', () => modal?.classList.remove('active'));
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('checkout-name')?.value;
      const phone = document.getElementById('checkout-phone')?.value;
      const address = document.getElementById('checkout-address')?.value;
      const pincode = document.getElementById('checkout-pincode')?.value;
      const gst = document.getElementById('checkout-gst')?.value;

      let msg = `🛒 *DIRECT WEBSITE ORDER SUBMISSION*\n`;
      msg += `Customer Name: ${name}\n`;
      msg += `Contact Phone: ${phone}\n`;
      msg += `Shipping Address: ${address} - Pincode: ${pincode}\n`;
      if (gst) msg += `GSTIN: ${gst}\n`;
      msg += `\n*Ordered Items:*\n`;
      STATE.cart.forEach((c, i) => {
        msg += `${i + 1}. ${c.title} x ${c.qty} pcs = ₹${(c.price * c.qty).toFixed(2)}\n`;
      });
      msg += `\nPlease confirm order acceptance and dispatch tracking link!`;

      window.open(`https://wa.me/919911678386?text=${encodeURIComponent(msg)}`, '_blank');
      STATE.cart = [];
      saveCart();
      renderCartDrawer();
      updateBadgeCounts();
      modal?.classList.remove('active');
      showToast('🎉 Order submitted successfully! Connecting with dispatch team.');
    });
  }
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('active');
}

/* =========================================
   9. FAQ ACCORDION
   ========================================= */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

/* =========================================
   10. LIVE RECENT ORDERS TICKER
   ========================================= */
function initRecentOrdersTicker() {
  const ticker = document.getElementById('live-order-ticker');
  if (!ticker) return;
  // Intrusive popup disabled for clean, subtle B2B experience
  ticker.style.display = 'none';
}

/* =========================================
   11. WISHLIST MANAGEMENT
   ========================================= */
function initWishlist() {
  updateBadgeCounts();
}

function toggleWishlist(id) {
  if (STATE.wishlist.includes(id)) {
    STATE.wishlist = STATE.wishlist.filter(item => item !== id);
    showToast('Removed from Wishlist 🤍');
  } else {
    STATE.wishlist.push(id);
    showToast('Added to Wishlist ❤️');
  }
  localStorage.setItem('as_wishlist', JSON.stringify(STATE.wishlist));
  updateBadgeCounts();
}

/* =========================================
   12. MOBILE NAVIGATION & BACKDROP
   ========================================= */
function initMobileNavigation() {
  const btn = document.getElementById('mobile-hamburger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!btn || !drawer || !backdrop) return;

  function open() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
}

/* =========================================
   13. SCROLL TOP & TOAST NOTIFICATION
   ========================================= */
function initScrollTopAndToast() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById('floating-toast-alert');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'floating-toast-alert';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✨</span> ${escapeHtml(msg)}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function updateBadgeCounts() {
  const cartBadges = document.querySelectorAll('.cart-badge-count');
  const wishBadges = document.querySelectorAll('.wishlist-badge-count');

  const cartTotal = STATE.cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadges.forEach(b => {
    b.textContent = STATE.cart.length > 0 ? STATE.cart.length : '0';
  });

  wishBadges.forEach(b => {
    b.textContent = STATE.wishlist.length.toString();
  });
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.openQuickView = openQuickView;
