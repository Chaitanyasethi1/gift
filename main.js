/**
 * AS PRINT GALLERY — Main JavaScript
 * Handles Navigation Drawer, Product Category Filtering,
 * FAQ Accordion, Per-Product WhatsApp Dispatch,
 * Contact Form Brief Dispatch, Clipboard Copying, and Back-to-Top.
 */

(function () {
  'use strict';

  const PRIMARY_PHONE = '+919911678386';
  const WHATSAPP_NUM = '919911678386';

  // Helper: Open WhatsApp with pre-filled encoded message
  function openWhatsApp(message) {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUM}?text=${encoded}`;
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
      <span style="color:#22c55e; font-weight:bold;">✓</span>
      <span>${message}</span>
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

  // Clipboard copy handler
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

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Close on link click inside drawer
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    // Highlight active link based on current path
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else if (href !== currentPath) {
        link.classList.remove('active');
      }
    });
  }

  // 2. Product Catalog Filtering on products.html
  function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-tab-btn');
    const productCards = document.querySelectorAll('.product-card[data-category], .gallery-card[data-category]');

    if (!filterBtns.length || !productCards.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'all';

        productCards.forEach((card) => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. 1-Click WhatsApp Inquire Buttons for Products (Product-Specific Message)
  function initProductInquiryButtons() {
    document.querySelectorAll('[data-product-name]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        // If it's already an anchor with href, allow default or enhance with formatted message
        const productName = btn.getAttribute('data-product-name');
        const message = `Hi AS Print Gallery! I'm interested in ${productName}. Please share details, minimum order quantity, and pricing.`;
        e.preventDefault();
        openWhatsApp(message);
      });
    });
  }

  // 4. FAQ Accordion Toggle
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach((item) => {
      const questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Optional: Close other FAQs for cleaner single-accordion UX
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 5. Contact Form WhatsApp Dispatch on contact.html
  function initContactForm() {
    const form = document.getElementById('contact-inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (document.getElementById('contact-name') || {}).value || '';
      const phone = (document.getElementById('contact-phone') || {}).value || '';
      const product = (document.getElementById('contact-product') || {}).value || '';
      const message = (document.getElementById('contact-message') || {}).value || '';

      if (!name.trim()) {
        showToast('Please enter your Name or Company Name');
        return;
      }
      if (!phone.trim()) {
        showToast('Please enter your Contact / WhatsApp Number');
        return;
      }

      const waMsg = `Hello AS Print Gallery! 🖨️
I have an inquiry from your website:
• Name / Brand: ${name.trim()}
• Phone: ${phone.trim()}
• Product Required: ${product || 'General Manufacturing Inquiry'}
• Requirement Details: ${message.trim() || 'Please call/message me with details.'}

Looking forward to your response!`;

      showToast('Redirecting to WhatsApp with your inquiry...', 2000);
      setTimeout(() => {
        openWhatsApp(waMsg);
        form.reset();
      }, 700);
    });
  }

  // 6. Back to Top Button
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // DOM Ready initialization
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initProductFilters();
    initProductInquiryButtons();
    initFaqAccordion();
    initContactForm();
    initBackToTop();
    setupClipboardButtons();
  });
})();
