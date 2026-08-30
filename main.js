/**
 * AS Print Gallery — Main JavaScript Engine
 * Handles Navigation, Mobile Drawer, Live Stamp Customizer,
 * Instant Quote Calculator, Product Filters, Modals, FAQs, Forms,
 * Toast Notifications, and Cookie Consent.
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '919911678386';

  // Helper: Open WhatsApp with encoded message
  function openWhatsApp(message) {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Toast Notification System
  function showToast(message, duration = 3000) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <span class="toast-icon">✓</span>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  // Copy to clipboard helper with toast
  function setupClipboardButtons() {
    document.querySelectorAll('[data-copy]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-copy');
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast(`Copied "${textToCopy}" to clipboard!`);
          }).catch(() => {
            fallbackCopy(textToCopy);
          });
        } else {
          fallbackCopy(textToCopy);
        }
      });
    });
  }

  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      showToast(`Copied "${text}" to clipboard!`);
    } catch (err) {
      showToast('Could not copy automatically. Please copy manually.');
    }
    document.body.removeChild(input);
  }

  // 1. Mobile Navigation & Drawer Controller
  function initNavigation() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    if (!hamburgerBtn || !mobileDrawer) return;

    function openDrawer() {
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mobileDrawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('visible');
      document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) closeDrawer();
      else openDrawer();
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Close on navigation link click inside drawer
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    // Highlight active link in header and mobile drawer
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else if (!link.classList.contains('nav-cta') && href !== currentPath) {
        link.classList.remove('active');
      }
    });
  }

  // 2. Live Interactive Stamp Customizer
  function initStampCustomizer() {
    const customizer = document.getElementById('stamp-customizer');
    if (!customizer) return;

    const inputMain = document.getElementById('stamp-text-main');
    const inputSub = document.getElementById('stamp-text-sub');
    const inputCenter = document.getElementById('stamp-text-center');
    const selectColor = document.getElementById('stamp-color-select');
    const selectShape = document.getElementById('stamp-shape-select');
    const rotationSlider = document.getElementById('stamp-rotation-slider');
    const rotationVal = document.getElementById('stamp-rotation-val');

    const previewContainer = document.getElementById('stamp-live-preview');
    const orderBtn = document.getElementById('stamp-order-btn');
    const resetBtn = document.getElementById('stamp-reset-btn');

    const colorMap = {
      red: { hex: '#c23a2c', name: 'Stamp Red' },
      black: { hex: '#1a1410', name: 'Carbon Black' },
      blue: { hex: '#183a54', name: 'Navy Blue' },
      green: { hex: '#22543d', name: 'Forest Green' },
      gold: { hex: '#b38314', name: 'Vintage Gold' },
    };

    function updateStamp() {
      const mainText = (inputMain && inputMain.value.trim()) || 'AS PRINT GALLERY';
      const subText = (inputSub && inputSub.value.trim()) || 'APPROVED FOR PRINT · EST. 2026';
      const centerText = (inputCenter && inputCenter.value.trim()) || 'A·S';
      const colorKey = (selectColor && selectColor.value) || 'red';
      const shape = (selectShape && selectShape.value) || 'circle';
      const rotation = rotationSlider ? parseInt(rotationSlider.value, 10) : -12;

      if (rotationVal) rotationVal.textContent = `${rotation}°`;

      const activeColor = colorMap[colorKey] ? colorMap[colorKey].hex : '#c23a2c';

      let svgHtml = '';

      if (shape === 'circle') {
        svgHtml = `
          <svg viewBox="0 0 300 300" class="stamp-svg" style="color: ${activeColor};">
            <defs>
              <path id="circlePathTop" d="M 45, 150 A 105, 105 0 0, 1 255, 150" fill="none" />
              <path id="circlePathBottom" d="M 255, 150 A 105, 105 0 0, 1 45, 150" fill="none" />
              <filter id="distress">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <g filter="url(#distress)" transform="rotate(${rotation} 150 150)">
              <!-- Outer border -->
              <circle cx="150" cy="150" r="138" fill="none" stroke="currentColor" stroke-width="7" stroke-dasharray="14 4" />
              <!-- Inner border -->
              <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" stroke-width="2.5" />
              <circle cx="150" cy="150" r="75" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3" />

              <!-- Top Arc Text -->
              <text font-family="'Anton', sans-serif" font-size="19" font-weight="700" fill="currentColor" letter-spacing="3.5">
                <textPath href="#circlePathTop" startOffset="50%" text-anchor="middle">${escapeHtml(mainText.toUpperCase())}</textPath>
              </text>

              <!-- Bottom Arc Text -->
              <text font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="currentColor" letter-spacing="2">
                <textPath href="#circlePathBottom" startOffset="50%" text-anchor="middle">${escapeHtml(subText.toUpperCase())}</textPath>
              </text>

              <!-- Center Monogram -->
              <text x="150" y="158" font-family="'Anton', sans-serif" font-size="44" font-weight="700" fill="currentColor" text-anchor="middle" letter-spacing="2">
                ${escapeHtml(centerText.toUpperCase())}
              </text>
              <line x1="100" y1="172" x2="200" y2="172" stroke="currentColor" stroke-width="2" />
            </g>
          </svg>
        `;
      } else if (shape === 'badge') {
        svgHtml = `
          <svg viewBox="0 0 300 300" class="stamp-svg" style="color: ${activeColor};">
            <defs>
              <filter id="distress-badge">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <g filter="url(#distress-badge)" transform="rotate(${rotation} 150 150)">
              <!-- Hex / Diamond Badge Shape -->
              <polygon points="150,15 285,85 285,215 150,285 15,215 15,85" fill="none" stroke="currentColor" stroke-width="7" />
              <polygon points="150,28 270,92 270,208 150,272 30,208 30,92" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3" />
              
              <text x="150" y="85" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="currentColor" text-anchor="middle" letter-spacing="3">
                ★ ${escapeHtml(mainText.toUpperCase())} ★
              </text>
              
              <text x="150" y="155" font-family="'Anton', sans-serif" font-size="48" font-weight="700" fill="currentColor" text-anchor="middle" letter-spacing="2">
                ${escapeHtml(centerText.toUpperCase())}
              </text>
              
              <line x1="70" y1="175" x2="230" y2="175" stroke="currentColor" stroke-width="3" />
              
              <text x="150" y="210" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13" fill="currentColor" text-anchor="middle" letter-spacing="2">
                ${escapeHtml(subText.toUpperCase())}
              </text>
            </g>
          </svg>
        `;
      } else {
        // Rectangle Box Stamp
        svgHtml = `
          <svg viewBox="0 0 300 300" class="stamp-svg" style="color: ${activeColor};">
            <defs>
              <filter id="distress-rect">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <g filter="url(#distress-rect)" transform="rotate(${rotation} 150 150)">
              <rect x="25" y="55" width="250" height="190" rx="6" fill="none" stroke="currentColor" stroke-width="6" />
              <rect x="36" y="66" width="228" height="168" rx="4" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3" />
              
              <text x="150" y="105" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="currentColor" text-anchor="middle" letter-spacing="3">
                ${escapeHtml(mainText.toUpperCase())}
              </text>
              
              <line x1="50" y1="118" x2="250" y2="118" stroke="currentColor" stroke-width="2" />
              
              <text x="150" y="165" font-family="'Anton', sans-serif" font-size="42" font-weight="700" fill="currentColor" text-anchor="middle" letter-spacing="3">
                ${escapeHtml(centerText.toUpperCase())}
              </text>
              
              <line x1="50" y1="182" x2="250" y2="182" stroke="currentColor" stroke-width="2" />

              <text x="150" y="212" font-family="'Space Grotesk', sans-serif" font-weight="600" font-size="12" fill="currentColor" text-anchor="middle" letter-spacing="2">
                ${escapeHtml(subText.toUpperCase())}
              </text>
            </g>
          </svg>
        `;
      }

      if (previewContainer) {
        previewContainer.innerHTML = svgHtml;
      }
    }

    function escapeHtml(str) {
      return str.replace(/[&<>'"]/g, 
        tag => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[tag] || tag)
      );
    }

    [inputMain, inputSub, inputCenter, selectColor, selectShape, rotationSlider].forEach((elem) => {
      if (elem) {
        elem.addEventListener('input', updateStamp);
        elem.addEventListener('change', updateStamp);
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (inputMain) inputMain.value = 'AS PRINT GALLERY';
        if (inputSub) inputSub.value = 'APPROVED FOR PRINT · EST. 2026';
        if (inputCenter) inputCenter.value = 'A·S';
        if (selectColor) selectColor.value = 'red';
        if (selectShape) selectShape.value = 'circle';
        if (rotationSlider) rotationSlider.value = '-12';
        updateStamp();
        showToast('Stamp customizer reset to default');
      });
    }

    if (orderBtn) {
      orderBtn.addEventListener('click', () => {
        const main = (inputMain && inputMain.value.trim()) || 'AS PRINT GALLERY';
        const sub = (inputSub && inputSub.value.trim()) || 'APPROVED FOR PRINT';
        const center = (inputCenter && inputCenter.value.trim()) || 'A·S';
        const color = (selectColor && selectColor.options[selectColor.selectedIndex].text) || 'Stamp Red';
        const shape = (selectShape && selectShape.options[selectShape.selectedIndex].text) || 'Circular Seal';

        const message = `Hello AS Print Gallery! 🖨️
I want to order a custom stamp designed on your website:
• Main Heading: ${main}
• Sub-text: ${sub}
• Center Monogram / Logo: ${center}
• Ink Color: ${color}
• Stamp Shape: ${shape}

Please share the design proof and quote.`;

        openWhatsApp(message);
      });
    }

    updateStamp();
  }

  // 3. Instant Print Price & Quote Calculator
  function initQuoteCalculator() {
    const calc = document.getElementById('quote-calculator');
    if (!calc) return;

    const productSelect = document.getElementById('calc-product');
    const qtySelect = document.getElementById('calc-qty');
    const finishSelect = document.getElementById('calc-finish');
    const sizeSelect = document.getElementById('calc-size');

    const priceDisplay = document.getElementById('calc-price-display');
    const unitPriceDisplay = document.getElementById('calc-unit-price');
    const turnaroundDisplay = document.getElementById('calc-turnaround');
    const whatsappOrderBtn = document.getElementById('calc-whatsapp-btn');

    // Pricing Matrix (Estimated baseline in INR)
    const productData = {
      stickers: {
        name: 'Custom Vinyl Stickers',
        sizes: [
          { label: '1.5 × 1.5 inch (Small)', multiplier: 1.0 },
          { label: '2.5 × 2.5 inch (Standard)', multiplier: 1.35 },
          { label: '3.5 × 3.5 inch (Large)', multiplier: 1.8 }
        ],
        baseRates: {
          '100': 399,
          '250': 799,
          '500': 1299,
          '1000': 2199,
          '2500': 4499,
          '5000': 7999
        },
        turnaround: '24 - 48 Hours'
      },
      cards: {
        name: 'Thank You Cards (350 GSM)',
        sizes: [
          { label: '3 × 2 inch (Standard Business)', multiplier: 1.0 },
          { label: '4 × 3 inch (Postcard Mini)', multiplier: 1.4 },
          { label: '6 × 4 inch (Standard Postcard)', multiplier: 2.0 }
        ],
        baseRates: {
          '100': 450,
          '250': 850,
          '500': 1450,
          '1000': 2400,
          '2500': 4900,
          '5000': 8800
        },
        turnaround: '24 - 48 Hours'
      },
      stamps: {
        name: 'Self-Inking Rubber Stamps',
        sizes: [
          { label: '1 × 1 inch Round', multiplier: 1.0 },
          { label: '1.5 × 1.5 inch Round/Square', multiplier: 1.45 },
          { label: '2 × 1 inch Rectangle', multiplier: 1.3 }
        ],
        baseRates: {
          '1': 349,
          '2': 649,
          '5': 1499,
          '10': 2799,
          '25': 6250
        },
        turnaround: 'Same Day / 24 Hours'
      },
      bags: {
        name: 'Branded Kraft Paper Bags',
        sizes: [
          { label: 'Small (6 × 8 × 3 inch)', multiplier: 1.0 },
          { label: 'Medium (8 × 10 × 4 inch)', multiplier: 1.35 },
          { label: 'Large (10 × 14 × 5 inch)', multiplier: 1.8 }
        ],
        baseRates: {
          '100': 1299,
          '250': 2799,
          '500': 4999,
          '1000': 8999,
          '2500': 19999
        },
        turnaround: '3 - 5 Working Days'
      },
      tags: {
        name: 'Garment Hang Tags with String',
        sizes: [
          { label: '3.5 × 2 inch Standard', multiplier: 1.0 },
          { label: '4 × 2.5 inch Large Tag', multiplier: 1.3 }
        ],
        baseRates: {
          '250': 699,
          '500': 1199,
          '1000': 1999,
          '2500': 4299,
          '5000': 7800
        },
        turnaround: '2 - 3 Working Days'
      },
      labels: {
        name: 'Product & Shipping Labels',
        sizes: [
          { label: '2 × 2 inch Round/Square', multiplier: 1.0 },
          { label: '3 × 2 inch Bottle/Jar', multiplier: 1.3 },
          { label: '4 × 6 inch Shipping Label', multiplier: 2.1 }
        ],
        baseRates: {
          '250': 599,
          '500': 999,
          '1000': 1699,
          '2500': 3499,
          '5000': 6299
        },
        turnaround: '24 - 48 Hours'
      },
      gumming: {
        name: 'Gumming Packaging Stickers',
        sizes: [
          { label: '2 inch Round Seal', multiplier: 1.0 },
          { label: '3 inch Carton Seal', multiplier: 1.4 }
        ],
        baseRates: {
          '250': 649,
          '500': 1099,
          '1000': 1899,
          '2500': 3999
        },
        turnaround: '24 - 48 Hours'
      },
      boxes: {
        name: 'Garment & Mailer Packaging Boxes',
        sizes: [
          { label: 'Small Apparel (8 × 6 × 2.5 inch)', multiplier: 1.0 },
          { label: 'Medium Garment (10 × 8 × 3 inch)', multiplier: 1.4 },
          { label: 'Large Shirt Box (12 × 10 × 4 inch)', multiplier: 1.9 }
        ],
        baseRates: {
          '50': 1750,
          '100': 3200,
          '250': 6990,
          '500': 12500,
          '1000': 22500
        },
        turnaround: '4 - 7 Working Days'
      }
    };

    const finishMultipliers = {
      standard: 1.0,
      glossy: 1.05,
      waterproof: 1.18,
      foil: 1.35
    };

    function populateQuantityAndSize(productKey) {
      const info = productData[productKey] || productData.stickers;
      
      // Update Sizes
      if (sizeSelect) {
        sizeSelect.innerHTML = '';
        info.sizes.forEach((s, idx) => {
          const opt = document.createElement('option');
          opt.value = s.multiplier;
          opt.textContent = s.label;
          if (idx === 0) opt.selected = true;
          sizeSelect.appendChild(opt);
        });
      }

      // Update Quantities
      if (qtySelect) {
        qtySelect.innerHTML = '';
        Object.keys(info.baseRates).forEach((qty, idx) => {
          const opt = document.createElement('option');
          opt.value = qty;
          opt.textContent = `${qty} pieces`;
          if (idx === 1 || (Object.keys(info.baseRates).length === 1 && idx === 0)) {
            opt.selected = true;
          }
          qtySelect.appendChild(opt);
        });
      }
    }

    function calculateEstimate() {
      const prodKey = (productSelect && productSelect.value) || 'stickers';
      const prodInfo = productData[prodKey] || productData.stickers;

      const qty = (qtySelect && qtySelect.value) || Object.keys(prodInfo.baseRates)[0];
      const sizeMult = sizeSelect ? parseFloat(sizeSelect.value) : 1.0;
      const finishKey = (finishSelect && finishSelect.value) || 'standard';
      const finishMult = finishMultipliers[finishKey] || 1.0;

      const basePrice = prodInfo.baseRates[qty] || 500;
      const rawTotal = Math.round(basePrice * sizeMult * finishMult);
      
      // Provide a fair transparent range (e.g. ₹750 - ₹850)
      const minEst = Math.floor((rawTotal * 0.95) / 10) * 10;
      const maxEst = Math.ceil((rawTotal * 1.08) / 10) * 10;

      const numQty = parseInt(qty, 10);
      const unitCost = (rawTotal / (numQty || 1)).toFixed(2);

      if (priceDisplay) {
        priceDisplay.textContent = `₹${minEst.toLocaleString('en-IN')} – ₹${maxEst.toLocaleString('en-IN')}`;
      }
      if (unitPriceDisplay) {
        unitPriceDisplay.textContent = `(Approx. ₹${unitCost} per piece)`;
      }
      if (turnaroundDisplay) {
        turnaroundDisplay.textContent = `⚡ Est. Turnaround: ${prodInfo.turnaround} · Free Design Support`;
      }
    }

    if (productSelect) {
      productSelect.addEventListener('change', () => {
        populateQuantityAndSize(productSelect.value);
        calculateEstimate();
      });
    }

    [qtySelect, finishSelect, sizeSelect].forEach((el) => {
      if (el) {
        el.addEventListener('change', calculateEstimate);
      }
    });

    if (whatsappOrderBtn) {
      whatsappOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const prodKey = (productSelect && productSelect.value) || 'stickers';
        const prodName = (productData[prodKey] && productData[prodKey].name) || 'Custom Print';
        const qty = qtySelect ? qtySelect.options[qtySelect.selectedIndex].text : '500 pieces';
        const size = sizeSelect ? sizeSelect.options[sizeSelect.selectedIndex].text : 'Standard';
        const finish = finishSelect ? finishSelect.options[finishSelect.selectedIndex].text : 'Standard Matte';
        const estPrice = priceDisplay ? priceDisplay.textContent : '';

        const msg = `Hello AS Print Gallery! 🖨️
I checked the Price Estimator on your website and want to place an order:
• Product: ${prodName}
• Quantity: ${qty}
• Size: ${size}
• Material/Finish: ${finish}
• Estimated Quote: ${estPrice}

Please share the free artwork preview and confirmation!`;

        openWhatsApp(msg);
      });
    }

    // Initialize defaults
    populateQuantityAndSize(productSelect ? productSelect.value : 'stickers');
    calculateEstimate();
  }

  // 4. Product Catalog Filters & Live Search (on products.html)
  function initProductFilters() {
    const filterBtns = document.querySelectorAll('.product-filter-btn');
    const searchInput = document.getElementById('product-search-input');
    const productCards = document.querySelectorAll('.product-card[data-category]');
    const noResultsMsg = document.getElementById('no-products-found');

    if (!filterBtns.length && !searchInput) return;

    let activeFilter = 'all';
    let searchQuery = '';

    function filterItems() {
      let visibleCount = 0;

      productCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        const title = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').toLowerCase();
        const desc = (card.querySelector('p') ? card.querySelector('p').textContent : '').toLowerCase();
        const tag = (card.querySelector('.product-tag') ? card.querySelector('.product-tag').textContent : '').toLowerCase();

        const matchesCategory = (activeFilter === 'all') || (category === activeFilter);
        const matchesSearch = !searchQuery || 
          title.includes(searchQuery) || 
          desc.includes(searchQuery) || 
          tag.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResultsMsg) {
        noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.getAttribute('data-filter') || 'all';
        filterItems();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        filterItems();
      });
    }
  }

  // 5. Product Quick-View Specs Modal
  function initProductModals() {
    const modal = document.getElementById('product-modal');
    if (!modal) return;

    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalClose = modal.querySelector('.modal-close');
    const modalTitle = modal.querySelector('#modal-product-title');
    const modalTag = modal.querySelector('#modal-product-tag');
    const modalDesc = modal.querySelector('#modal-product-desc');
    const modalImg = modal.querySelector('#modal-product-img');
    const modalSpecs = modal.querySelector('#modal-product-specs');
    const modalWhatsappBtn = modal.querySelector('#modal-whatsapp-btn');

    function openModal(data) {
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalTag) modalTag.textContent = data.tag;
      if (modalDesc) modalDesc.textContent = data.desc;
      if (modalImg && data.img) {
        modalImg.src = data.img;
        modalImg.alt = data.title;
      }
      
      if (modalSpecs && data.specs) {
        modalSpecs.innerHTML = data.specs.map(s => `<li><strong>${s.label}:</strong> ${s.val}</li>`).join('');
      }

      if (modalWhatsappBtn) {
        modalWhatsappBtn.onclick = (e) => {
          e.preventDefault();
          const message = `Hello AS Print Gallery! 🖨️
I am interested in ordering: *${data.title}* (${data.tag}).
Please share the design templates, standard sizes, and pricing details.`;
          openWhatsApp(message);
        };
      }

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Attach click triggers to product cards
    document.querySelectorAll('[data-product-modal]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        try {
          const rawData = trigger.getAttribute('data-product-modal');
          const data = JSON.parse(rawData);
          openModal(data);
        } catch (err) {
          console.error('Error opening product modal:', err);
        }
      });
    });
  }

  // 6. Interactive Contact Form with WhatsApp Direct Dispatch
  function initContactForm() {
    const form = document.getElementById('inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const phoneInput = document.getElementById('form-phone');
      const productInput = document.getElementById('form-product');
      const qtyInput = document.getElementById('form-qty');
      const messageInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const product = productInput ? productInput.value : '';
      const qty = qtyInput ? qtyInput.value.trim() : '';
      const details = messageInput ? messageInput.value.trim() : '';

      if (!name) {
        showToast('Please enter your full name');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!phone) {
        showToast('Please enter your WhatsApp/Phone number');
        if (phoneInput) phoneInput.focus();
        return;
      }

      const waMessage = `Hello AS Print Gallery! 🖨️
I have a new printing enquiry:
• Name: ${name}
• Contact: ${phone}
• Product Interested: ${product || 'General Print Enquiry'}
• Quantity: ${qty || 'To be decided'}
• Details / Artwork Notes: ${details || 'Please contact me for details.'}

Looking forward to your free design proof & quotation!`;

      showToast('Redirecting to WhatsApp with your enquiry...', 2000);
      setTimeout(() => {
        openWhatsApp(waMessage);
        form.reset();
      }, 800);
    });
  }

  // 7. FAQ Accordion Component
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach((item) => {
      const trigger = item.querySelector('.faq-question');
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        const isExpanded = item.classList.contains('active');
        
        // Close others for clean single-expand experience
        faqItems.forEach((other) => {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.faq-question');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });

        if (!isExpanded) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 8. Back to Top Button & Scroll Progress Indicator
  function initScrollEffects() {
    const backToTopBtn = document.getElementById('back-to-top');
    const scrollProgressPath = document.getElementById('scroll-progress-path');
    const siteHeader = document.querySelector('.site-header');

    let totalLength = 0;
    if (scrollProgressPath) {
      totalLength = scrollProgressPath.getTotalLength();
      scrollProgressPath.style.strokeDasharray = `${totalLength} ${totalLength}`;
      scrollProgressPath.style.strokeDashoffset = `${totalLength}`;
    }

    function onScroll() {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Header shadow on scroll
      if (siteHeader) {
        if (scrollY > 20) siteHeader.classList.add('scrolled');
        else siteHeader.classList.remove('scrolled');
      }

      // Back to top button visibility
      if (backToTopBtn) {
        if (scrollY > 350) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }

      // Circular scroll progress
      if (scrollProgressPath && docHeight > 0) {
        const progress = scrollY / docHeight;
        const offset = totalLength - (progress * totalLength);
        scrollProgressPath.style.strokeDashoffset = `${offset}`;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // 9. Interactive Cookie Consent Banner
  function initCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    const consentKey = 'as_print_cookie_consent';
    const hasConsented = localStorage.getItem(consentKey);

    if (!hasConsented) {
      setTimeout(() => {
        banner.classList.add('show');
      }, 1200);
    }

    const acceptBtn = document.getElementById('cookie-accept-btn');
    const declineBtn = document.getElementById('cookie-decline-btn');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem(consentKey, 'accepted');
        banner.classList.remove('show');
        showToast('Cookie preferences saved.');
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        localStorage.setItem(consentKey, 'essential_only');
        banner.classList.remove('show');
        showToast('Essential cookies only enabled.');
      });
    }
  }

  // 10. Floating WhatsApp Action Tooltip & Auto Interaction
  function initFloatingWhatsApp() {
    const floatBtn = document.getElementById('floating-whatsapp');
    if (!floatBtn) return;

    floatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = `Hello AS Print Gallery! 🖨️ I am visiting your website and would like to ask a question about your custom printing & packaging.`;
      openWhatsApp(message);
    });
  }

  // Run all modules on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initStampCustomizer();
    initQuoteCalculator();
    initProductFilters();
    initProductModals();
    initContactForm();
    initFaqAccordion();
    initScrollEffects();
    initCookieConsent();
    initFloatingWhatsApp();
    setupClipboardButtons();
  });
})();
