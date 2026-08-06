import React from 'react';

/**
 * Child reveal — inert until parent `.section.is-in` / `.is-in` unlocks CSS.
 * Driven by section IntersectionObserver (scroll-into-view), not mount.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  variant = 'up',
  ...rest
}) {
  const Tag = as;
  const ms = Math.round(delay * 1000);

  return (
    <Tag
      className={`reveal reveal--${variant} ${className}`.trim()}
      style={{ '--reveal-delay': `${ms}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
