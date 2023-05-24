import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './routes.scss';
export interface IRouteProps {
  children: React.ReactNode;
};

const Route: React.FC<IRouteProps> = ({ children }: IRouteProps) => {
  let [isLoading, setIsLoading] = useState(true);
  let loading = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <main className={isLoading ? "loader" : ""}>
      {children}
    </main>
  );
};

export default Route;