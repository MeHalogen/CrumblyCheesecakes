// Configuration defaults matching screenshot
window.defaultConfig = {
  restaurant_name: 'Crumbly Cheesecakes',
  hero_bg: getComputedStyle(document.documentElement).getPropertyValue('--color-hero-bg').trim() || '#8b4a22',
  primary: getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#8b4513',
  text: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim() || '#2c1810',
  surface: getComputedStyle(document.documentElement).getPropertyValue('--color-surface').trim() || '#ffffff'
};
const defaultConfig = {
  background_color: '#f8f5f0',
  surface_color: '#ffffff',
  text_color: '#2c1810',
  primary_action_color: '#8b4513',
  secondary_action_color: '#d4a574',
  font_family: 'Georgia',
  font_size: 16,
  restaurant_name: 'Crumbly Cheesecakes',
  tagline: 'Handcrafted No-Bake Cheesecakes',
  hero_heading: 'Experience the Magic of Homemade Cheesecakes',
  hero_description: 'Handcrafted with love, one slice at a time',
  welcome_heading: 'Welcome to Crumbly Cheesecakes',
  welcome_text: 'At Crumbly Cheesecakes, we create delicious no-bake cheesecakes using only the finest ingredients. Each slice is lovingly handcrafted and topped with premium ingredients to give you an unforgettable dessert experience. From classic to creative flavors, there\'s something for every cheesecake lover!',
  appetizers_title: 'Cheesecakes',
  mains_title: 'Main Courses',
  desserts_title: 'Desserts',
  beverages_title: 'Beverages',
  contact_heading: 'Order Now',
  phone: '+91 8799731262',
  footer_text: 'Thank you for choosing Crumbly Cheesecakes! 🍰'
};

export default defaultConfig;