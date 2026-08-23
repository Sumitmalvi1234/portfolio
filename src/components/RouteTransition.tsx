// src/components/RouteTransition.tsx
import React, { useRef } from 'react';
import { useLocation } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface RouteTransitionProps {
  children: React.ReactNode;
}

export default function RouteTransition({ children }: RouteTransitionProps): React.JSX.Element {
  const location = useLocation();
  const transitionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!transitionRef.current) return;

    // Reset initial viewport configurations before starting
    gsap.set(transitionRef.current, { opacity: 0, y: 15 });

    // Smooth entry sequence acceleration
    gsap.to(transitionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      clearProps: 'transform' // Avoid layout layout conflicts down the tree
    });
  }, [location.pathname]); // Fires instantly whenever the route location changes

  return (
    <div ref={transitionRef} className="w-full">
      {children}
    </div>
  );
}
