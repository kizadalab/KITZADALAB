
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="glass-effect rounded-lg p-6 border border-white border-opacity-10 hover-scale">
      <div className="text-lg font-medium text-white mb-4 italic">"{quote}"</div>
      <div className="text-neon-blue">— {author}</div>
    </div>
  );
}
