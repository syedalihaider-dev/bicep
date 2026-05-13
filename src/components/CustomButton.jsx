import React from 'react';

const CustomButton = ({ 
    children, 
    className = '', 
    onClick, 
    type = 'button',
    variant = 'primary',
    style = {} 
}) => {
    const variantClass = variant === 'outline' ? 'btn-outline-custom' : 'btn-primary-custom';
    
    return (
        <button
            type={type}
            className={`btn ${variantClass} ${className}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
};

export default CustomButton;
