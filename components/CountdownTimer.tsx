'use client';
import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC<{ days: number }> = ({ days }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FEF2F2', padding: '4px 10px', borderRadius: '4px', border: '1px solid #FECACA' }}>
      <span style={{ fontSize: '1rem' }} aria-hidden="true">⏳</span>
      <div style={{ display: 'flex', gap: '4px', fontWeight: 700, color: '#991B1B', fontSize: '0.85rem' }} suppressHydrationWarning>
        <span>{String(timeLeft.days).padStart(2, '0')}d</span>:
        <span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
        <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
        <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
      </div>
    </div>
  );
};
