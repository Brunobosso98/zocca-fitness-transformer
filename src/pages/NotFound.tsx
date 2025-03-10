
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zocca-gray p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-zocca-blue font-poppins font-bold text-3xl mb-2">
            Zocca <span className="text-zocca-orange">•</span> Personal Trainer
          </h1>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-zocca-blue">404</h2>
        <p className="text-xl text-gray-600 mb-6">Ops! Página não encontrada</p>
        <a 
          href="/" 
          className="primary-button inline-block"
        >
          Retornar à Página Inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
