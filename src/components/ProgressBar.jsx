import React from 'react';

export function ProgressBar({ value = 0, variant = 'gold', height = 8 }) {
  const clamped = Math.max(0, Math.min(100, Number(value) || 0));

  let fillClass = '';
  if (variant === 'ok') fillClass = 'ok';
  if (variant === 'warn') fillClass = 'warn';

  return (
    <div className="progress-bar-container" style={{ height }}>
      <div
        className={`progress-bar-fill ${fillClass}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
