import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// Semantic color and font tokens (to be expanded as we go)
export const COLORS = {
  primary: '#0072ce',
  primaryHover: '#0c8cf3',
  primaryPressed: '#005aa8',
  positive: '#048157',
  attention: '#d32b22',
  white: '#ffffff',
  navy: '#1f233e',
  neutralSecondary: '#75707029',
  // ...add more as needed
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roobert, sans-serif',
    fontWeight: 600,
    fontSize: '34px',
    lineHeight: '41px',
  },
  body: {
    fontFamily: 'Roobert, sans-serif',
    fontWeight: 400,
    fontSize: '17px',
    lineHeight: '22px',
  },
  // ...add more as needed
};

export function Button({
  label = 'Label',
  details = '',
  type = 'primary',
  size = 'large',
  state = 'default',
  showIcon = false,
  icon = null,
  variant = 'default',
  options = [], // for dropdown
  onSelect = () => {}, // for dropdown
}) {
  const [open, setOpen] = useState(false);

  // Compose className based on props (for vanilla CSS)
  const className = [
    'gns-btn',
    `gns-btn--${type}`,
    `gns-btn--${size}`,
    `gns-btn--${state}`,
    variant === 'icon' ? 'gns-btn--icon' : '',
    variant === 'stacked' ? 'gns-btn--stacked' : '',
    variant === 'multilabel' ? 'gns-btn--multilabel' : '',
    variant === 'dropdown' ? 'gns-btn--dropdown' : '',
  ].join(' ').trim();

  if (variant === 'icon') {
    return (
      <button className={className} disabled={state === 'disabled'} aria-label={label}>
        <span className="gns-btn__icon">{icon || <span className="gns-btn__icon-placeholder" />}</span>
      </button>
    );
  }

  if (variant === 'stacked') {
    return (
      <button className={className} disabled={state === 'disabled'} aria-label={label}>
        {(showIcon || icon) && (
          <span className="gns-btn__icon gns-btn__icon--stacked">{icon || <span className="gns-btn__icon-placeholder" />}</span>
        )}
        <span className="gns-btn__label gns-btn__label--stacked">{label}</span>
      </button>
    );
  }

  if (variant === 'multilabel') {
    return (
      <button className={className} disabled={state === 'disabled'} aria-label={label}>
        <span className="gns-btn__label gns-btn__label--multilabel">{label}</span>
        <span className="gns-btn__details">{details}</span>
      </button>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className="gns-dropdown-wrapper">
        <button
          className={className}
          disabled={state === 'disabled'}
          aria-label={label}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span className="gns-btn__label">{label}</span>
          <span className="gns-btn__icon gns-btn__icon--dropdown" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
        {open && options.length > 0 && (
          <ul className="gns-dropdown-menu">
            {options.map((opt, i) => (
              <li
                key={opt}
                className="gns-dropdown-menu__item"
                onClick={() => {
                  setOpen(false);
                  onSelect(opt, i);
                }}
                tabIndex={0}
                role="menuitem"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // default button
  return (
    <button className={className} disabled={state === 'disabled'} aria-label={label}>
      {showIcon && <span className="gns-btn__icon">{icon || <span className="gns-btn__icon-placeholder" />}</span>}
      <span className="gns-btn__label">{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  details: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'positive', 'attention']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  state: PropTypes.oneOf(['default', 'hover', 'pressed', 'disabled']),
  showIcon: PropTypes.bool,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'icon', 'stacked', 'multilabel', 'dropdown']),
  options: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
};

// You can add more supporting components here as needed (e.g., StatusBadge, ComponentTitleArea) 