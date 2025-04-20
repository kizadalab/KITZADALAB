
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

export function PricingCard({ 
  title, 
  price, 
  features, 
  isPopular = false,
  ctaText = "Get Started"
}: PricingCardProps) {
  return (
    <div className={`pricing-card hover-scale ${isPopular ? 'border-neon-blue' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-neon-blue text-dark-navy text-xs font-bold py-1 px-4 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">${price}</span>
      </div>
      
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-lab-green mr-2 mt-1 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 px-4 rounded-md font-medium ${
          isPopular 
            ? 'bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy'
            : 'border border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-10'
        } transition-all duration-300 button-glow`}
      >
        {ctaText}
      </button>
    </div>
  );
}
