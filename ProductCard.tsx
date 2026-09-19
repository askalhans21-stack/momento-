import { MessageCircle } from 'lucide-react';
import type { Product } from '@/data/business';
import { whatsappLink } from '@/data/business';

export default function ProductCard({ product }: { product: Product }) {
  const waMessage = `Hello Momento Phones, I'm interested in: ${product.name}. Is it available and what is the latest price?`;

  return (
    <div className="card-product group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-700">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-white text-lg mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-ink-500/50">
          <span className="text-xs font-semibold text-gold-300 tracking-wide">
            Contact us for latest price
          </span>
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink-600 hover:bg-gold-400 hover:text-ink-900 text-gold-200 text-xs font-semibold transition-all duration-300 border border-gold-400/30 hover:border-gold-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
