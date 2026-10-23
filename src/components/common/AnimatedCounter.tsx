import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1200,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = value;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (endValue - startValue) * ease;
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [value, duration]);

  return (
    <span className={`font-mono tabular-nums tracking-tight font-bold ${className}`}>
      {prefix}
      {displayValue.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
};
