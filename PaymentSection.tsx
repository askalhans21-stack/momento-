import { Banknote, CreditCard, Wallet, ShoppingBag } from 'lucide-react';

const PAYMENTS = [
  { name: 'Cash', icon: Banknote },
  { name: 'Card', icon: CreditCard },
  { name: 'Tabby', icon: Wallet },
  { name: 'Tamara', icon: ShoppingBag },
];

export default function PaymentSection() {
  return (
    <section className="py-14 lg:py-16 border-y border-ink-500/40 bg-ink-800/50">
      <div className="container-lux">
        <div className="text-center mb-8">
          <p className="section-subtitle reveal mb-2">We Accept</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white reveal">
            Flexible Payment Options
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PAYMENTS.map((payment, i) => {
            const Icon = payment.icon;
            return (
              <div
                key={payment.name}
                className="reveal flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-ink-700/40 border border-ink-500/40 hover:border-gold-400/30 hover:bg-ink-700/60 transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center border border-gold-400/20">
                  <Icon className="w-7 h-7 text-gold-300" />
                </div>
                <span className="text-white font-display font-semibold text-lg">
                  {payment.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
