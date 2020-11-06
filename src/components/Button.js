import React from 'react';
import './Button.css';

const Button = ({ children, type, onClick, className, buttonSize }) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    )
}

export default Button;
