import { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { NAV_LINKS, BUSINESS, whatsappLink } from '@/data/business';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center shadow-lg shadow-gold-400/20 group-hover:scale-105 transition-transform">
            <Smartphone className="w-5 h-5 text-ink-900" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
              MOMENTO PHONES
            </span>
            <span className="block text-[10px] text-gold-300 font-medium tracking-widest uppercase">
              Trading LLC · Dubai
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-gold-200 hover:bg-gold-400/5 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={whatsappLink('Hello Momento Phones, I would like to inquire about your products.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs px-5 py-2.5"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-ink-600 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-ink-900/95 backdrop-blur-xl transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-1 px-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-display font-semibold text-gray-200 hover:text-gold-300 transition-colors py-3"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink('Hello Momento Phones, I would like to inquire about your products.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-6 w-full max-w-xs"
          >
            WhatsApp Us
          </a>
          <a href={`tel:${BUSINESS.phoneIntl}`} className="text-gold-200 text-sm mt-3">
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
