import { Smartphone, Phone, Mail, MapPin, Clock, MessageCircle, Banknote, CreditCard } from 'lucide-react';
import { BUSINESS, NAV_LINKS, whatsappLink } from '@/data/business';

export default function Footer() {
  return (
    <footer className="relative bg-ink-800 border-t border-ink-500/40 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-lux relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-ink-900" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base block leading-tight">
                  MOMENTO PHONES
                </span>
                <span className="text-[10px] text-gold-300 font-medium tracking-widest uppercase">
                  Trading LLC · Dubai
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Your trusted destination for mobile phones, laptops, accessories, gaming, and
              professional repair services in Dubai.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink('Hello Momento Phones!')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-ink-600 border border-ink-400/50 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-300 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${BUSINESS.phoneIntl}`}
                className="w-10 h-10 rounded-xl bg-ink-600 border border-ink-400/50 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-300 transition-all duration-300"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="w-10 h-10 rounded-xl bg-ink-600 border border-ink-400/50 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-300 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Store Information
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">{BUSINESS.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.addressLine1}, {BUSINESS.addressLine2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.hoursShort}, {BUSINESS.daysNote}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex gap-1.5 mt-0.5">
                  <Banknote className="w-4 h-4 text-gold-400" />
                  <CreditCard className="w-4 h-4 text-gold-400" />
                </div>
                <span>Cash · Card · Tabby · Tamara</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Phones · Laptops · Accessories · Gaming · Repairs · Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
