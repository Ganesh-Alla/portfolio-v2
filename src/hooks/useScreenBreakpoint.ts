"use client"
import { useState, useEffect, useCallback } from 'react';

export default function useScreenBreakpoint(breakpoint: number) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      // Ensure this runs only on the client-side
      setIsMobile(window.innerWidth < breakpoint);
    }
  }, [breakpoint]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize(); // Set initial value

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  return isMobile;
}
