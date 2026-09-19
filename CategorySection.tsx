import { MessageCircle, ArrowRight } from 'lucide-react';
import type { ProductCategory } from '@/data/business';
import { whatsappLink } from '@/data/business';
import ProductCard from './ProductCard';

export default function CategorySection({ category }: { category: ProductCategory }) {
  const waMessage = `Hello Momento Phones, I'm interested in ${category.title}. Could you share what's available and the latest prices?`;

  return (
    <section
      id={category.id}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Category hero banner */}
      <div className="container-lux mb-12">
        <div className="reveal relative rounded-3xl overflow-hidden h-44 sm:h-56 lg:h-64 border border-ink-500/60">
          <img
            src={category.heroImage}
            alt={category.heroAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-14">
            <p className="section-subtitle mb-2">{category.subtitle}</p>
            <h2 className="section-title mb-3">{category.title}</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="container-lux">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product, i) => (
            <div
              key={product.name}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            <MessageCircle className="w-4 h-4" />
            Ask About {category.title} on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
