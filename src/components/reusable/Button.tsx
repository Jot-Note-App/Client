import React from 'react';
interface ButtonProps {
    onClick: () => void;
    color?: 'warning' | 'main' | 'gray' | 'purple' | 'transparent'
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
            //TODO: Add new color between mediumGray and darkGray
            hoverStyle = 'hover:bg-gray-400';
            break;
        case 'purple':
            colorStyle = 'bg-purple';
            hoverStyle = 'hover:bg-darkPurple';
            break;
        case 'transparent':
            colorStyle = 'bg-transparent';
            hoverStyle = 'hover:bg-lightGray';
            break;

    }
    return <button className={`px-2 py-1 text-white font-medium rounded outline-none select-none transition-colors duration-200 ${colorStyle} ${hoverStyle}`} style={{ minWidth: "5rem" }} onClick={onClick}>{children}</button>;
}
export default Button;