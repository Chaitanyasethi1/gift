/**
 * AS PRINT GALLERY — API Client Service
 * Connects frontend UI to Node.js / Express REST API backend
 */

const API_BASE = window.location.origin;

const PackagingAPI = {

  // 1. Fetch products from Supabase API with fallback to local STATE
  async getProducts(category = 'all') {
    try {
      const supabaseUrl = 'https://jwsfjyxarfhogmdiiars.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3c2ZqeXhhcmZob2dtZGlpYXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0MjY1NTYsImV4cCI6MjEwNjAwMjU1Nn0.XbB8twZh_elDVapx1YlO4QLsVAEiUIYgZW9ctiE9FCE';
      
      let url = `${supabaseUrl}/rest/v1/products?select=*&is_active=eq.true`;
      if (category !== 'all') {
        url += `&category=eq.${encodeURIComponent(category)}`;
      }
      
      const res = await fetch(url, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      
      // Map Supabase schema back to frontend expected structure
      const mappedData = data.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        categoryLabel: p.category.toUpperCase(),
        image: p.image_url || 'assets/boxes.jpg',
        price: p.price,
        moq: p.moq,
        badge: 'NEW',
        badgeClass: 'bestseller',
        rating: 5.0,
        reviews: 0,
        specs: ['Customized', 'High Quality'],
        desc: p.title,
        tiers: [
          { qty: p.moq, rate: p.price },
          { qty: p.moq * 5, rate: p.price * 0.9 },
          { qty: p.moq * 10, rate: p.price * 0.85 }
        ]
      }));
      return mappedData;
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
