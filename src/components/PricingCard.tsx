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
  return;
}