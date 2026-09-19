import { ShoppingBag, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/data/business';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/10885666/pexels-photo-10885666.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Premium smartphone on a dark background"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/85 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-transparent to-ink-900/60" />
      </div>

      {/* Decorative gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-lux relative z-10 pt-28 pb-16 text-center">
        <div className="reveal is-visible inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-gray-300 tracking-wide">
            Open Now · {BUSINESS.hours} · {BUSINESS.daysNote}
          </span>
        </div>

        <h1
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.05] mb-4 animate-fade-in-up"
        >
          MOMENTO PHONES
          <br />
          <span className="text-gradient-gold">TRADING LLC</span>
        </h1>

        <p
          className="text-base sm:text-lg lg:text-xl text-gold-200 font-semibold tracking-[0.15em] uppercase mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Phones · Laptops · Accessories · Gaming · Repairs
        </p>

        <p
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Your trusted destination for mobiles, electronics and gaming in Dubai.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a href="#phones" className="btn-gold w-full sm:w-auto">
            <ShoppingBag className="w-4 h-4" />
            Shop Now
          </a>
          <a
            href={whatsappLink('Hello Momento Phones, I would like to inquire about your products and services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a
            href={BUSINESS.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark w-full sm:w-auto"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>

        {/* Info bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400 animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>{BUSINESS.addressLine1}</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-ink-400" />
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-gold-400" />
            <span>{BUSINESS.phone}</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-ink-400" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            <span>{BUSINESS.hours} · {BUSINESS.daysNote}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-gold-400/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-gold-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
