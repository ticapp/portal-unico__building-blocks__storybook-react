import React, { useState, useEffect, ReactNode } from 'react';

export interface ResponsiveWrapperProps {
  condition: boolean;
  children: ReactNode;
}

const ResponsiveWrapper = ({ children, condition }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(isMounted && condition);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    setIsVisible(isMounted && condition);
  }, [isMounted, condition]);

  const customStyle = {
    display: isVisible ? 'block' : 'none'
  };

  return (
    <div className="ama-responsive-wrapper" style={customStyle}>
      {children}
    </div>
  );
};

export { ResponsiveWrapper };
