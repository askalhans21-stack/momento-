export const BUSINESS = {
  name: 'Momento Phones Trading LLC',
  shortName: 'Momento Phones',
  phone: '050 119 0896',
  phoneIntl: '+971501190896',
  email: 'momentophones58@gmail.com',
  addressLine1: 'Near Abu Baker Al Siddique Metro Station, Exit 2',
  addressLine2: 'Dubai, UAE',
  hours: '10:00 AM – 2:00 AM',
  hoursShort: '10 AM – 2 AM',
  daysNote: '7 Days a Week',
  mapUrl: 'https://maps.apple.com/place?coordinate=25.272295,55.332500&name=Marked%20Location&map=explore',
  payments: ['Cash', 'Card', 'Tabby', 'Tamara'],
};

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.phoneIntl}`;

export function whatsappLink(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Phones', href: '#phones' },
  { label: 'Laptops', href: '#laptops' },
  { label: 'Accessories', href: '#accessories' },
  { label: 'Gaming', href: '#gaming' },
  { label: 'Repair Center', href: '#repair' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export type Product = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  products: Product[];
};

export const CATEGORIES: ProductCategory[] = [
  {
    id: 'phones',
    title: 'Mobile Phones',
    subtitle: 'iPhone · Samsung · More',
    description:
      'From the latest iPhone and Samsung Galaxy models to a wide selection of other top-brand smartphones — all genuine, competitively priced, and ready in-store.',
    heroImage: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Newest Apple iPhone model with box and charging accessories on a table',
    products: [
      {
        name: 'iPhone 15 Pro Max',
        description: 'Titanium build, A17 Pro chip, 48MP camera system, stunning Super Retina XDR display.',
        image: 'https://images.pexels.com/photos/16004978/pexels-photo-16004978.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'iPhone Pro showcasing Dynamic Island feature with accessories',
      },
      {
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Galaxy AI, 200MP camera, built-in S Pen, and a bright 6.8-inch Dynamic AMOLED display.',
        image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Samsung Galaxy smartphone on a surface at sunset',
      },
      {
        name: 'iPhone 15',
        description: 'Dynamic Island, A16 Bionic, dual 48MP cameras, and a durable ceramic shield front.',
        image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Newest Apple iPhone model with box and charging accessories',
      },
      {
        name: 'Samsung Galaxy A Series',
        description: 'Affordable performance with Super AMOLED display, long battery life, and versatile cameras.',
        image: 'https://images.pexels.com/photos/214488/pexels-photo-214488.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Samsung smartphone on a wooden surface',
      },
      {
        name: 'Other Smartphones',
        description: 'Xiaomi, Oppo, Honor, Realme and more — a wide range of options to fit every budget.',
        image: 'https://images.pexels.com/photos/28902919/pexels-photo-28902919.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Multiple modern smartphones showing home screens on a sleek surface',
      },
      {
        name: 'Pre-Owned & Refurbished',
        description: 'Quality-checked pre-owned phones at great prices. All devices tested and guaranteed.',
        image: 'https://images.pexels.com/photos/8024035/pexels-photo-8024035.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Gold smartphone on a textured black surface',
      },
    ],
  },
  {
    id: 'laptops',
    title: 'Laptops & Computers',
    subtitle: 'Laptops · Desktops · Accessories',
    description:
      'Premium laptops, desktop computers, and essential accessories for work, study, and creative workflows — from leading brands at competitive prices.',
    heroImage: 'https://images.pexels.com/photos/249541/pexels-photo-249541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'MacBook Pro laptop showcasing macOS on a surface',
    products: [
      {
        name: 'MacBook Air & Pro',
        description: 'Apple Silicon power, all-day battery, and stunning Liquid Retina displays for pros and students.',
        image: 'https://images.pexels.com/photos/249541/pexels-photo-249541.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'MacBook Pro laptop showcasing macOS',
      },
      {
        name: 'Windows Laptops',
        description: 'Dell, HP, Lenovo, Asus and more — from ultrabooks to high-performance gaming and creator laptops.',
        image: 'https://images.pexels.com/photos/4523026/pexels-photo-4523026.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Open laptop on a white marble surface viewed from above',
      },
      {
        name: 'Gaming Laptops',
        description: 'High-refresh-rate displays, dedicated GPUs, and RGB keyboards for serious gaming on the go.',
        image: 'https://images.pexels.com/photos/7727496/pexels-photo-7727496.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Illuminated WASD keys on a gaming keyboard with red LED lights',
      },
      {
        name: 'Desktop Computers',
        description: 'Custom and pre-built desktop PCs for office, home, and gaming — configurable to your needs.',
        image: 'https://images.pexels.com/photos/35505975/pexels-photo-35505975.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Backlit keyboard in a dark setting',
      },
      {
        name: 'Keyboards & Mice',
        description: 'Mechanical keyboards, wireless mice, and ergonomic accessories for every setup.',
        image: 'https://images.pexels.com/photos/222835/pexels-photo-222835.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Black keyboard with shallow depth of field',
      },
      {
        name: 'Computer Accessories',
        description: 'Monitors, docks, webcams, storage drives, and all the essentials for a complete workstation.',
        image: 'https://images.pexels.com/photos/234527/pexels-photo-234527.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Laptop and smartphone on a dark surface',
      },
    ],
  },
  {
    id: 'accessories',
    title: 'Accessories',
    subtitle: 'Chargers · Cables · Cases · More',
    description:
      'Everything you need to protect, charge, and enhance your devices — genuine accessories from trusted brands, all in stock and ready to go.',
    heroImage: 'https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Power bank with USB charging cables on a white background',
    products: [
      {
        name: 'Chargers & Adapters',
        description: 'Fast-charging wall adapters, car chargers, and multi-port USB chargers for all devices.',
        image: 'https://images.pexels.com/photos/1202575/pexels-photo-1202575.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Smartphone connected to a charger on a table',
      },
      {
        name: 'Cables & Connectors',
        description: 'Lightning, USB-C, micro-USB cables and HDMI connectors — durable and MFi-certified options.',
        image: 'https://images.pexels.com/photos/4195332/pexels-photo-4195332.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Phone charging cable USB connector',
      },
      {
        name: 'Phone Cases & Covers',
        description: 'Slim, rugged, clear, and designer cases to protect your phone in style.',
        image: 'https://images.pexels.com/photos/1670768/pexels-photo-1670768.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Colorful smartphone cases on a dark surface',
      },
      {
        name: 'Screen Protectors',
        description: 'Tempered glass and film protectors with precise fit for iPhone, Samsung, and more.',
        image: 'https://images.pexels.com/photos/19784109/pexels-photo-19784109.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Smartphone with rugged case on a desk',
      },
      {
        name: 'Earbuds & Headphones',
        description: 'Wireless earbuds, over-ear headphones, and audio accessories for music and calls.',
        image: 'https://images.pexels.com/photos/9204671/pexels-photo-9204671.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'White wireless earbuds on a black background',
      },
      {
        name: 'Power Banks & More',
        description: 'Portable chargers, holders, stands, and other essential electronic accessories.',
        image: 'https://images.pexels.com/photos/37475662/pexels-photo-37475662.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Smartphone charging via power bank',
      },
    ],
  },
  {
    id: 'gaming',
    title: 'Gaming',
    subtitle: 'Consoles · Games · Accessories',
    description:
      'New and pre-owned gaming consoles, the latest game titles, and accessories for Xbox and PlayStation — your gaming destination in Dubai.',
    heroImage: 'https://images.pexels.com/photos/33513532/pexels-photo-33513532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'PlayStation 5 with DualSense controller on a wooden shelf',
    products: [
      {
        name: 'PlayStation 5',
        description: 'Next-gen gaming with lightning-fast load times, 4K visuals, and the DualSense controller.',
        image: 'https://images.pexels.com/photos/33513532/pexels-photo-33513532.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'PlayStation 5 console with DualSense controller on a wooden shelf',
      },
      {
        name: 'Xbox One & Series X|S',
        description: 'Powerful Xbox consoles with Game Pass support for hundreds of titles at your fingertips.',
        image: 'https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'White Xbox console and controller on a wooden surface',
      },
      {
        name: 'PlayStation 4',
        description: 'A huge library of acclaimed games at great value — pre-owned and new consoles available.',
        image: 'https://images.pexels.com/photos/1367000/pexels-photo-1367000.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Two PlayStation controllers on a white surface',
      },
      {
        name: 'Xbox 360',
        description: 'Classic console with an iconic game library — available pre-owned for retro gaming fans.',
        image: 'https://images.pexels.com/photos/28978363/pexels-photo-28978363.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Classic Xbox 360 console showcasing its vintage design',
      },
      {
        name: 'Gaming Controllers',
        description: 'Extra and replacement controllers for PS5, PS4, Xbox — official and compatible options.',
        image: 'https://images.pexels.com/photos/7871504/pexels-photo-7871504.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'PlayStation controllers on a white table',
      },
      {
        name: 'Games & Accessories',
        description: 'Latest releases and popular titles, plus headsets, charging stands, and gaming gear.',
        image: 'https://images.pexels.com/photos/7773720/pexels-photo-7773720.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Person gaming with neon lights in background',
      },
    ],
  },
];

export const REPAIR_SERVICES = [
  {
    title: 'iPhone Repair',
    description: 'Screen replacement, battery, charging port, water damage, and software issues for all iPhone models.',
    icon: 'Smartphone',
  },
  {
    title: 'Samsung Repair',
    description: 'Galaxy screen, battery, camera, and board-level repairs by experienced technicians.',
    icon: 'Smartphone',
  },
  {
    title: 'Other Mobile Repairs',
    description: 'Xiaomi, Oppo, Honor, Huawei, and all major Android phone brands serviced in-store.',
    icon: 'Smartphone',
  },
  {
    title: 'Laptop Repair',
    description: 'MacBook and Windows laptop repair — keyboard, screen, SSD upgrade, OS reinstall, and more.',
    icon: 'Laptop',
  },
  {
    title: 'Gaming Console Repair',
    description: 'PS5, PS4, Xbox Series, Xbox One, and Xbox 360 — HDMI port, disc drive, overheating, and software fixes.',
    icon: 'Gamepad2',
  },
  {
    title: 'Hardware Troubleshooting',
    description: 'Diagnostics for power, display, connectivity, and performance issues across all devices.',
    icon: 'Wrench',
  },
  {
    title: 'Software Troubleshooting',
    description: 'OS installation, data recovery, virus removal, jailbreak, flashing, and firmware updates.',
    icon: 'MonitorCog',
  },
  {
    title: 'General Electronics',
    description: 'Tablets, earbuds, smartwatches, and other consumer electronics — diagnosed and repaired.',
    icon: 'Cpu',
  },
];

export const FEATURES = [
  {
    title: 'Genuine Products',
    description: 'All phones, laptops, and accessories are genuine and sourced from trusted suppliers.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Expert Repairs',
    description: 'Experienced technicians handle everything from screen replacements to board-level repair.',
    icon: 'Wrench',
  },
  {
    title: 'Open Late, 7 Days',
    description: 'We are open from 10 AM to 2 AM every day — convenient for your busy schedule.',
    icon: 'Clock',
  },
  {
    title: 'Easy WhatsApp Ordering',
    description: 'Message us on WhatsApp to check stock, get prices, and reserve your product instantly.',
    icon: 'MessageCircle',
  },
  {
    title: 'Flexible Payments',
    description: 'Pay with Cash, Card, Tabby, or Tamara — choose what works best for you.',
    icon: 'CreditCard',
  },
  {
    title: 'Prime Location',
    description: 'Located near Abu Baker Al Siddique Metro Station, Exit 2 — easy to reach by Metro.',
    icon: 'MapPin',
  },
];
