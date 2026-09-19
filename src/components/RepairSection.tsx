import {
  Smartphone, Laptop, Gamepad2, Wrench, MonitorCog, Cpu, MessageCircle, Zap,
} from 'lucide-react';
import { REPAIR_SERVICES, whatsappLink } from '@/data/business';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Laptop,
  Gamepad2,
  Wrench,
  MonitorCog,
  Cpu,
};

export default function RepairSection() {
  return (
    <section id="repair" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6755075/pexels-photo-6755075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Technician repairing a smartphone"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/90 to-ink-900" />
      </div>

      <div className="container-lux relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="section-subtitle reveal mb-3">Repair Center</p>
          <h2 className="section-title reveal mb-4">
            Professional Repair Services
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed reveal">
            From cracked screens to complex board-level repairs, our experienced
            technicians service phones, laptops, and gaming consoles — quickly and reliably.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {REPAIR_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <div
                key={service.title}
                className="reveal group p-6 rounded-2xl bg-ink-800/80 backdrop-blur-sm border border-ink-500/50 hover:border-gold-400/40 hover:bg-ink-700/80 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-500/5 flex items-center justify-center mb-4 border border-gold-400/20 group-hover:from-gold-400/30 group-hover:to-gold-500/10 transition-all">
                  {Icon && <Icon className="w-6 h-6 text-gold-300" />}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="reveal relative rounded-3xl overflow-hidden border border-gold-400/30 bg-gradient-to-r from-ink-800 via-ink-700 to-ink-800 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <Zap className="w-5 h-5 text-gold-300" />
                <span className="text-gold-300 text-sm font-semibold tracking-widest uppercase">
                  Quick Turnaround
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                Need a Repair? Contact Us on WhatsApp
              </h3>
              <p className="text-gray-400 text-base">
                Send us your device details and issue — we'll get back to you fast with a quote.
              </p>
            </div>
            <a
              href={whatsappLink('Hello Momento Phones, I need a repair. My device is: [device model], Issue: [describe the problem]. Can you help?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold whitespace-nowrap text-base px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
