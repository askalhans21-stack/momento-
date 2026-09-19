import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/data/business';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 overflow-hidden">
      <div className="container-lux">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle reveal mb-3">Get In Touch</p>
          <h2 className="section-title reveal mb-4">Contact Us</h2>
          <p className="text-gray-400 text-base sm:text-lg reveal">
            Have a question about a product, need a repair quote, or want to check stock?
            Reach out — we respond fast on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact info card */}
          <div className="reveal glass rounded-3xl p-8 lg:p-10">
            <h3 className="font-display font-bold text-xl text-white mb-6">
              {BUSINESS.name}
            </h3>
            <div className="space-y-5">
              <a
                href={whatsappLink('Hello Momento Phones, I have a question.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center border border-gold-400/20 group-hover:bg-gold-400/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">WhatsApp / Phone</p>
                  <p className="text-white font-medium group-hover:text-gold-200 transition-colors">
                    {BUSINESS.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center border border-gold-400/20 group-hover:bg-gold-400/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Email</p>
                  <p className="text-white font-medium group-hover:text-gold-200 transition-colors break-all">
                    {BUSINESS.email}
                  </p>
                </div>
              </a>

              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center border border-gold-400/20 group-hover:bg-gold-400/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-white font-medium group-hover:text-gold-200 transition-colors">
                    {BUSINESS.addressLine1}, {BUSINESS.addressLine2}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center border border-gold-400/20">
                  <Clock className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Opening Hours</p>
                  <p className="text-white font-medium">
                    {BUSINESS.hours} · {BUSINESS.daysNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <a
                href={whatsappLink('Hello Momento Phones, I would like to inquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-4 py-3"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-outline-gold text-xs px-4 py-3">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="btn-outline-gold text-xs px-4 py-3">
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-xs px-4 py-3"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map / Visit store card */}
          <div className="reveal glass rounded-3xl p-8 lg:p-10 flex flex-col">
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Visit Our Store
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Find us near Abu Baker Al Siddique Metro Station — Exit 2, Dubai.
            </p>

            {/* Stylized map placeholder */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-ink-400/40 bg-ink-700 min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-600 to-ink-800" />
              {/* Grid lines */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gold-400/20 animate-ping absolute inset-0" />
                  <div className="w-12 h-12 rounded-full bg-gold-400/30 flex items-center justify-center relative">
                    <MapPin className="w-6 h-6 text-gold-200" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-gold-200 font-medium bg-ink-900/80 px-3 py-1 rounded-full">
                  Momento Phones
                </p>
              </div>
              {/* Roads */}
              <div className="absolute top-1/3 left-0 right-0 h-1 bg-ink-400/30" />
              <div className="absolute bottom-1/4 left-0 right-0 h-0.5 bg-ink-400/20" />
              <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-ink-400/30" />
            </div>

            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 w-full"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Maps & Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
