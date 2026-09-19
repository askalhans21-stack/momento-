import { CheckCircle2, MapPin, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/data/business';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 overflow-hidden">
      <div className="container-lux">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden border border-ink-500/60">
              <img
                src="https://images.pexels.com/photos/17565491/pexels-photo-17565491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900"
                alt="Inside an electronics store in Dubai"
                loading="lazy"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 glass rounded-2xl p-5 shadow-xl shadow-black/40 max-w-[260px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gold-400/15 flex items-center justify-center border border-gold-400/30">
                  <Clock className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Open 7 Days</p>
                  <p className="text-gray-400 text-xs">{BUSINESS.hours}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Conveniently located near Abu Baker Al Siddique Metro Station
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="section-subtitle reveal mb-3">About Us</p>
            <h2 className="section-title reveal mb-6">
              Your Trusted Electronics & Gaming Store in Dubai
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-8">
              <p className="reveal">
                <span className="text-gold-200 font-semibold">Momento Phones Trading LLC</span> is a
                Dubai-based electronics retailer offering mobile phones, laptops, accessories, and
                gaming consoles. We focus on reliable products, fair prices, and friendly,
                knowledgeable service.
              </p>
              <p className="reveal">
                From the latest iPhone and Samsung smartphones to gaming consoles like PlayStation 5
                and Xbox, we stock a wide selection of genuine products. Our in-house repair center
                handles everything from screen replacements to complex hardware and software
                troubleshooting — all under one roof.
              </p>
              <p className="reveal">
                We are open late, seven days a week, and located just steps from Abu Baker Al Siddique
                Metro Station. Whether you are shopping for a new device, need a quick repair, or
                just have a question — we are here to help.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Genuine, quality-checked products',
                'Expert repair services on-site',
                'Flexible payment options',
                'Convenient Metro-accessible location',
                'Late hours, 7 days a week',
                'Fast WhatsApp ordering & support',
              ].map((item, i) => (
                <li
                  key={item}
                  className="reveal flex items-center gap-2.5 text-sm text-gray-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink('Hello Momento Phones, I would like to know more about your store and services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="w-4 h-4" />
                Chat With Us
              </a>
              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                <MapPin className="w-4 h-4" />
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
