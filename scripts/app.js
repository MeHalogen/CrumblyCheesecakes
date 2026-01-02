// Apply styles based on defaultConfig
function applyTheme(cfg) {
  const hero = document.getElementById('home');
  const navName = document.getElementById('nav-restaurant-name');
  const footer = document.getElementById('footer');

  if (hero) {
    hero.style.backgroundColor = cfg.hero_bg;
    hero.style.color = 'var(--color-primary-contrast)';
  }

  document.querySelectorAll('.nav-link').forEach(a => a.style.color = cfg.text);
  if (navName) navName.textContent = cfg.restaurant_name;

  document.querySelectorAll('.order-card').forEach(card => {
    card.style.borderColor = cfg.primary;
  });

  document.querySelectorAll('.instagram-button, .phone-button, #whatsapp-button').forEach(btn => {
    btn.style.backgroundColor = cfg.primary;
    btn.style.color = 'var(--color-primary-contrast)';
  });

  if (footer) {
    footer.style.backgroundColor = cfg.primary;
    footer.style.color = 'var(--color-primary-contrast)';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(window.defaultConfig || {});
});
// This file contains the main JavaScript logic for the restaurant menu application.
// It handles user interactions, dynamic content updates, and event listeners.

const defaultConfig = {
  backgroundColor: '#f8f5f0',
  surfaceColor: '#ffffff',
  textColor: '#2c1810',
  primaryActionColor: '#8b4513',
  secondaryActionColor: '#d4a574',
  fontFamily: 'Georgia',
  fontSize: 16,
  restaurantName: 'Crumbly Cheesecakes',
  tagline: 'Handcrafted No-Bake Cheesecakes',
  heroHeading: 'Experience the Magic of Homemade Cheesecakes',
  heroDescription: 'Handcrafted with love, one slice at a time',
  welcomeHeading: 'Welcome to Crumbly Cheesecakes',
  welcomeText: 'At Crumbly Cheesecakes, we create delicious no-bake cheesecakes using only the finest ingredients. Each slice is lovingly handcrafted and topped with premium ingredients to give you an unforgettable dessert experience. From classic to creative flavors, there\'s something for every cheesecake lover!',
  appetizersTitle: 'Cheesecakes',
  contactHeading: 'Order Now',
  phone: '+91 8799731262',
  footerText: 'Thank you for choosing Crumbly Cheesecakes! 🍰'
};

async function onConfigChange(config) {
  const baseFontFamily = `${config.fontFamily || defaultConfig.fontFamily}, Georgia, serif`;
  const baseSize = config.fontSize || defaultConfig.fontSize;
  const bgColor = config.backgroundColor || defaultConfig.backgroundColor;
  const surfaceColor = config.surfaceColor || defaultConfig.surfaceColor;
  const textColor = config.textColor || defaultConfig.textColor;
  const primaryColor = config.primaryActionColor || defaultConfig.primaryActionColor;

  // Apply colors
  document.getElementById('app').style.backgroundColor = bgColor;
  document.getElementById('app').style.color = textColor;

  // Navigation
  const nav = document.getElementById('nav');
  nav.style.backgroundColor = `${surfaceColor}cc`;
  nav.style.color = primaryColor;
  document.getElementById('nav-restaurant-name').style.color = primaryColor;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.style.color = primaryColor;
  });

  // Hero section
  const heroSection = document.getElementById('home');
  heroSection.style.backgroundColor = primaryColor;
  heroSection.style.color = surfaceColor;

  const heroButton = document.getElementById('hero-button');
  heroButton.style.backgroundColor = surfaceColor;
  heroButton.style.color = primaryColor;

  // Order cards
  const orderCards = document.querySelectorAll('.order-card');
  orderCards.forEach(card => {
    card.style.backgroundColor = surfaceColor;
    card.style.border = `2px solid ${primaryColor}`;
  });

  const whatsappButton = document.getElementById('whatsapp-button');
  if (whatsappButton) {
    whatsappButton.style.backgroundColor = primaryColor;
    whatsappButton.style.color = surfaceColor;
  }

  const instagramButtons = document.querySelectorAll('.instagram-button');
  instagramButtons.forEach(btn => {
    btn.style.backgroundColor = primaryColor;
    btn.style.color = surfaceColor;
  });

  const phoneButtons = document.querySelectorAll('.phone-button');
  phoneButtons.forEach(btn => {
    btn.style.backgroundColor = primaryColor;
    btn.style.color = surfaceColor;
  });

  // Footer
  document.getElementById('footer').style.backgroundColor = primaryColor;
  document.getElementById('footer').style.color = surfaceColor;

  const decorativeLines = document.querySelectorAll('.decorative-line');
  decorativeLines.forEach(line => {
    line.style.color = primaryColor;
  });

  // Apply fonts
  document.body.style.fontFamily = baseFontFamily;

  // Apply font sizes - Hero
  document.getElementById('hero-heading').style.fontSize = `${baseSize * 4.375}px`;
  document.getElementById('hero-description').style.fontSize = `${baseSize * 1.5}px`;
  heroButton.style.fontSize = `${baseSize * 1.25}px`;

  // Welcome and Contact headings
  document.getElementById('welcome-heading').style.fontSize = `${baseSize * 3.125}px`;
  document.getElementById('contact-heading').style.fontSize = `${baseSize * 3.125}px`;

  // Welcome text
  document.getElementById('welcome-text').style.fontSize = `${baseSize * 1.25}px`;

  // Menu title
  document.querySelector('#menu h2').style.fontSize = `${baseSize * 3.75}px`;
  document.querySelector('#menu h2').style.color = primaryColor;
  document.getElementById('tagline').style.fontSize = `${baseSize * 1.5}px`;

  const sectionTitles = document.querySelectorAll('#menu h2:not(:first-child)');
  sectionTitles.forEach(title => {
    title.style.fontSize = `${baseSize * 2.5}px`;
    title.style.color = primaryColor;
  });

  const menuItemTitles = document.querySelectorAll('.menu-item h3');
  menuItemTitles.forEach(title => {
    title.style.fontSize = `${baseSize * 1.25}px`;
  });

  const prices = document.querySelectorAll('.menu-item span');
  prices.forEach(price => {
    price.style.fontSize = `${baseSize * 1.25}px`;
    price.style.color = primaryColor;
  });

  const descriptions = document.querySelectorAll('.menu-item p');
  descriptions.forEach(desc => {
    desc.style.fontSize = `${baseSize}px`;
  });

  // Contact section
  const contactLabels = document.querySelectorAll('#contact h3');
  contactLabels.forEach(label => {
    label.style.fontSize = `${baseSize * 1.5}px`;
  });

  document.getElementById('phone').style.fontSize = `${baseSize * 1.25}px`;

  document.getElementById('footer-text').style.fontSize = `${baseSize}px`;

  // Apply text content
  document.getElementById('nav-restaurant-name').textContent = config.restaurantName || defaultConfig.restaurantName;
  document.getElementById('hero-heading').textContent = config.heroHeading || defaultConfig.heroHeading;
  document.getElementById('hero-description').textContent = config.heroDescription || defaultConfig.heroDescription;
  document.getElementById('welcome-heading').textContent = config.welcomeHeading || defaultConfig.welcomeHeading;
  document.getElementById('welcome-text').textContent = config.welcomeText || defaultConfig.welcomeText;
  document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
  document.getElementById('appetizers-title').textContent = config.appetizersTitle || defaultConfig.appetizersTitle;
  document.getElementById('contact-heading').textContent = config.contactHeading || defaultConfig.contactHeading;
  document.getElementById('phone').textContent = config.phone || defaultConfig.phone;
  document.getElementById('footer-text').textContent = config.footerText || defaultConfig.footerText;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.backgroundColor || defaultConfig.backgroundColor,
        set: (value) => {
          config.backgroundColor = value;
          window.elementSdk.setConfig({ backgroundColor: value });
        }
      },
      {
        get: () => config.surfaceColor || defaultConfig.surfaceColor,
        set: (value) => {
          config.surfaceColor = value;
          window.elementSdk.setConfig({ surfaceColor: value });
        }
      },
      {
        get: () => config.textColor || defaultConfig.textColor,
        set: (value) => {
          config.textColor = value;
          window.elementSdk.setConfig({ textColor: value });
        }
      },
      {
        get: () => config.primaryActionColor || defaultConfig.primaryActionColor,
        set: (value) => {
          config.primaryActionColor = value;
          window.elementSdk.setConfig({ primaryActionColor: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.fontFamily || defaultConfig.fontFamily,
      set: (value) => {
        config.fontFamily = value;
        window.elementSdk.setConfig({ fontFamily: value });
      }
    },
    fontSizeable: {
      get: () => config.fontSize || defaultConfig.fontSize,
      set: (value) => {
        config.fontSize = value;
        window.elementSdk.setConfig({ fontSize: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['restaurantName', config.restaurantName || defaultConfig.restaurantName],
    ['tagline', config.tagline || defaultConfig.tagline],
    ['heroHeading', config.heroHeading || defaultConfig.heroHeading],
    ['heroDescription', config.heroDescription || defaultConfig.heroDescription],
    ['welcomeHeading', config.welcomeHeading || defaultConfig.welcomeHeading],
    ['welcomeText', config.welcomeText || defaultConfig.welcomeText],
    ['appetizersTitle', config.appetizersTitle || defaultConfig.appetizersTitle],
    ['contactHeading', config.contactHeading || defaultConfig.contactHeading],
    ['phone', config.phone || defaultConfig.phone],
    ['footerText', config.footerText || defaultConfig.footerText]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}