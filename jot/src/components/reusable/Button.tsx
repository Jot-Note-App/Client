import React from 'react';
interface ButtonProps {
    onClick: () => void;
    color?: 'warning' | 'main' | 'gray'
    children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ onClick, color = 'main', children }) => {
    var colorStyle = 'bg-main';
    var hoverStyle = 'bg-main';
    switch (color) {
        case 'warning':
            colorStyle = 'bg-warning';
            hoverStyle = 'hover:bg-warningDark';
            break;
        case 'main':
            colorStyle = 'bg-main';
            hoverStyle = 'bg-main';
            break;
        case 'gray':
            colorStyle = 'bg-mediumGray';
            hoverStyle = 'hover:bg-gray-400';
            break;
    }
    return <button className={`w-20 px-2 py-1 text-white font-medium rounded outline-none select-none ${colorStyle} ${hoverStyle}`} onClick={onClick}>{children}</button>;
}
export default Button;