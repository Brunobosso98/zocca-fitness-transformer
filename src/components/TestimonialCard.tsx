
import React from 'react';

interface TestimonialCardProps {
  name: string;
  age?: number;
  quote: string;
  image: {
    before: string;
    after: string;
  };
  results?: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  age, 
  quote, 
  image, 
  results,
  delay 
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        <div className="grid grid-cols-2">
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-zocca-blue/80 text-white text-xs font-semibold py-1 px-2">
              ANTES
            </div>
            <img 
              src={image.before} 
              alt={`${name} antes`} 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-zocca-orange/80 text-white text-xs font-semibold py-1 px-2">
              DEPOIS
            </div>
            <img 
              src={image.after} 
              alt={`${name} depois`} 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
        
        {results && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white rounded-full shadow-lg h-16 w-16 flex items-center justify-center">
              <p className="text-zocca-blue font-poppins font-bold text-sm">{results}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zocca-orange/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-600 italic mb-4">{quote}</p>
        <div className="flex items-center">
          <p className="font-poppins font-semibold text-zocca-blue">
            {name}{age ? `, ${age} anos` : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
