import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/data/business';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {expanded && (
        <div className="glass rounded-2xl p-4 max-w-[260px] animate-slide-in-right mb-1">
          <div className="flex items-start justify-between mb-2">
            <p className="font-display font-bold text-white text-sm">Chat with us!</p>
            <button onClick={() => setExpanded(false)} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            Need help? Message us on WhatsApp for quick replies about products, prices, and repairs.
          </p>
          <a
            href={whatsappLink('Hello Momento Phones, I have a question about your products or services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full text-xs py-2.5"
          >
            <MessageCircle className="w-4 h-4" />
            Start Chat
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-600/30 hover:scale-110 transition-transform duration-300 animate-pulse-gold"
        aria-label="Open WhatsApp chat"
      >
        {expanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
}
