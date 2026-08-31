/**
 * AS PRINT GALLERY — Complete JavaScript Controller
 * Informational Catalogue & Direct Factory WhatsApp Inquiries
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initFaqAccordion();
  initCategoryFilters();
  initClipboardButtons();
  initContactForm();
  initBackToTop();
  initProductInquiryButtons();
  handleUrlFilterParam();
});

/**
 * 1. Mobile Drawer Navigation
 */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');

  if (!hamburgerBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('visible');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('visible');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/**
 * 2. FAQ Accordion Logic
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for a clean single-open accordion feel
      faqItems.forEach((other) => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * 3. Products Page Category Filtering & Sample Showcase
 */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const productCards = document.querySelectorAll('.product-card, .gallery-card');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      applyFilter(filterValue);
    });
  });
}

function applyFilter(filterValue) {
  const productCards = document.querySelectorAll('.product-card, .gallery-card');
  productCards.forEach((card) => {
    const category = card.getAttribute('data-category') || '';
    if (filterValue === 'all') {
      card.style.display = '';
    } else if (filterValue === 'sample') {
      if (card.classList.contains('gallery-card') || category.includes('sample')) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    } else if (category.includes(filterValue)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Handle URL filter param if navigated with ?filter=sample or ?filter=label
 */
function handleUrlFilterParam() {
  const params = new URLSearchParams(window.location.search);
  const filterParam = params.get('filter');
  if (filterParam) {
    const targetBtn = document.querySelector(`.filter-tab-btn[data-filter="${filterParam}"]`);
    if (targetBtn) {
      targetBtn.click();
    }
  }
}

/**
 * 4. Clipboard Copy with Toast Notifications
 */
function initClipboardButtons() {
  const copyBtns = document.querySelectorAll('[data-copy]');
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${textToCopy}`);
      }
    });
  });
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<span>✔</span> ${message}`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2800);
}

/**
 * 5. Direct Contact Form (Formats Brief to WhatsApp)
 */
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim() || 'Client';
    const phone = document.getElementById('contact-phone')?.value.trim() || '';
    const product = document.getElementById('contact-product')?.value || 'Printing Services';
    const msg = document.getElementById('contact-message')?.value.trim() || 'Standard order requirements';

    const formattedText = `Hi AS Print Gallery!%0A%0A*Name / Brand:* ${encodeURIComponent(name)}%0A*Phone / WhatsApp:* ${encodeURIComponent(phone)}%0A*Product of Interest:* ${encodeURIComponent(product)}%0A*Order Brief:* ${encodeURIComponent(msg)}%0A%0APlease share digital proof and factory pricing.`;

    const waUrl = `https://wa.me/919911678386?text=${formattedText}`;
    window.open(waUrl, '_blank', 'noopener');
  });
}

/**
 * 6. Back To Top Floating Action
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 7. Per-Product Dynamic WhatsApp Links
 */
function initProductInquiryButtons() {
  const inquiryBtns = document.querySelectorAll('[data-product-name]');
  inquiryBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const productName = btn.getAttribute('data-product-name');
      if (productName && (!btn.getAttribute('href') || btn.getAttribute('href') === '#')) {
        e.preventDefault();
        const text = `Hi AS Print Gallery! I'm interested in ${encodeURIComponent(productName)}. Please share details, MOQ, and pricing.`;
        window.open(`https://wa.me/919911678386?text=${text}`, '_blank', 'noopener');
      }
    });
  });
}
