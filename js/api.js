/**
 * AS PRINT GALLERY — API Client Service
 * Connects frontend UI to Node.js / Express REST API backend
 */

const API_BASE = window.location.origin;

const PackagingAPI = {
  // 1. Fetch products from API with fallback to local STATE
  async getProducts(category = 'all') {
    try {
      const url = category === 'all' ? `${API_BASE}/api/products` : `${API_BASE}/api/products?category=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('API unavailable, using client-side catalog data:', err.message);
      if (typeof STATE !== 'undefined' && STATE.products) {
        return category === 'all' ? STATE.products : STATE.products.filter(p => p.category === category);
      }
      return [];
    }
  },

  // 2. Calculate 3D custom box pricing via backend engine
  async calculateBox(dimensions) {
    try {
      const res = await fetch(`${API_BASE}/api/calculate-box`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dimensions)
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API calculation unavailable, falling back to local formulas:', err.message);
      return null;
    }
  },

  // 3. Track live logistics consignment
  async trackOrder(orderId) {
    try {
      const res = await fetch(`${API_BASE}/api/track/${encodeURIComponent(orderId)}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API tracking unavailable, using offline fallback:', err.message);
      return null;
    }
  },

  // 4. Check delivery pincode serviceability
  async checkPincode(pincode) {
    try {
      const res = await fetch(`${API_BASE}/api/check-pincode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pincode })
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API pincode check unavailable, using offline fallback:', err.message);
      return null;
    }
  },

  // 5. Submit confirmed wholesale order
  async submitOrder(orderData) {
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API order logging unavailable, caching locally in localStorage:', err.message);
      return null;
    }
  }
};

window.PackagingAPI = PackagingAPI;
