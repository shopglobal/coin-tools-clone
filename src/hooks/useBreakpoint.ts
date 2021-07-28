import React, { useState, useEffect } from 'react';

export default function useBreakpoint(): string {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const breakpoint: number = 600;
  useEffect(() => {
    window.addEventListener('resize', (): void => setWidth(window.innerWidth));
  }, []);
  const checkBreakpoint: boolean = width < breakpoint;
  return checkBreakpoint ? 'mobile' : 'desktop';
}
