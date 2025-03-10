
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-zocca-blue/10 rounded-full mb-4 text-zocca-blue">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-zocca-blue mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
