const fs = require('fs');
const path = require('path');

// Create placeholder images directory
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create simple SVG placeholders
const createPlaceholder = (filename, width = 800, height = 600, text = 'Placeholder') => {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
  
  fs.writeFileSync(path.join(imagesDir, filename), svg);
  console.log(`Created ${filename}`);
};

// Generate placeholder images for all projects
const placeholders = [
  { filename: 'kv-summer.jpg', text: 'Summer Campaign KV' },
  { filename: 'branding-redesign.jpg', text: 'Brand Identity' },
  { filename: 'tvc-telecom.mp4', text: 'Telecom TVC' },
  { filename: 'mograph-promo.mp4', text: 'Motion Graphics' },
  { filename: '3d-product.png', text: '3D Product Render' },
  { filename: 'deck-design.jpg', text: 'Pitch Deck' },
  { filename: 'kv-tech.jpg', text: 'Tech Conference KV' },
  { filename: 'restaurant-brand.jpg', text: 'Restaurant Branding' },
  { filename: 'car-tvc.mp4', text: 'Car Commercial' },
  { filename: 'app-launch.mp4', text: 'App Launch Animation' },
  { filename: 'arch-viz.png', text: 'Architectural Viz' },
  { filename: 'corporate-deck.jpg', text: 'Corporate Presentation' },
  { filename: 'kv-holiday.jpg', text: 'Holiday Campaign KV' },
  { filename: 'sports-brand.jpg', text: 'Sports Brand Identity' },
  { filename: 'product-tvc.mp4', text: 'Product Launch TVC' },
  { filename: 'brand-animation.mp4', text: 'Brand Animation' },
  { filename: 'interior-3d.png', text: 'Interior Visualization' },
  { filename: 'investor-deck.jpg', text: 'Investor Deck' },
  { filename: 'fashion-kv.jpg', text: 'Fashion Week KV' },
  { filename: 'healthcare-brand.jpg', text: 'Healthcare Branding' },
  { filename: 'music-kv.jpg', text: 'Music Festival KV' },
  { filename: 'fintech-brand.jpg', text: 'Fintech Branding' },
  { filename: 'gaming-tvc.mp4', text: 'Gaming TVC' },
  { filename: 'ui-animation.mp4', text: 'UI Animation' },
  { filename: 'product-render.png', text: 'Product Rendering' },
  { filename: 'startup-deck.jpg', text: 'Startup Pitch Deck' },
  { filename: 'auto-kv.jpg', text: 'Automotive KV' },
  { filename: 'food-brand.jpg', text: 'Food Brand Identity' }
];

placeholders.forEach(({ filename, text }) => {
  createPlaceholder(filename, 800, 600, text);
});

console.log('All placeholder images generated successfully!');
