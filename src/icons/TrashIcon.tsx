import React from 'react';
interface TrashIconProps {
    height?: number;
    width?: number;
}
const TrashIcon: React.FC<TrashIconProps> = ({ height = 20, width = 20 }) => {
    return (
        <svg width={width.toString()} height={height.toString()} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33333 1.66666L7.5 2.49999H2.5V4.16666H17.5V2.49999H12.5L11.6667 1.66666H8.33333ZM3.6377 5.83332L4.91048 16.8864C5.02048 17.7114 5.73083 18.3333 6.5625 18.3333H13.4359C14.2675 18.3333 14.9787 17.7124 15.0895 16.8799L16.3623 5.83332H3.6377Z" fill="currentColor" />
        </svg>
    );
}
export default TrashIcon;