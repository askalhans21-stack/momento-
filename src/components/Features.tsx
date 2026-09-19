import { ShieldCheck, Wrench, Clock, MessageCircle, CreditCard, MapPin } from 'lucide-react';
import { FEATURES } from '@/data/business';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Wrench,
  Clock,
  MessageCircle,
  CreditCard,
  MapPin,
};

export default function Features() {
  return (
    <section className="py-16 lg:py-20 border-y border-ink-500/40 bg-ink-800/50">
      <div className="container-lux">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            return (
              <div
                key={feature.title}
                className="reveal flex items-start gap-4 p-5 rounded-2xl bg-ink-700/40 border border-ink-500/40 hover:border-gold-400/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center border border-gold-400/20">
                  {Icon && <Icon className="w-6 h-6 text-gold-300" />}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
