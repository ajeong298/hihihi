
import React from 'react';

interface QuoteCardProps {
  quote: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 m-4 w-full max-w-2xl transform transition-all duration-500 ease-in-out animate-fade-in-up">
      <div className="relative">
        <span className="absolute -top-6 -left-4 text-8xl text-indigo-200/80 opacity-50 font-serif">“</span>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed text-center z-10 relative">
          {quote}
        </p>
        <span className="absolute -bottom-12 -right-4 text-8xl text-indigo-200/80 opacity-50 font-serif">”</span>
      </div>
    </div>
  );
};

// Add keyframes for animation in a style tag for broader compatibility
const style = document.createElement('style');
style.innerHTML = `
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
}
`;
document.head.appendChild(style);


export default QuoteCard;
