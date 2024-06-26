import React from 'react';
interface PencilIconProps {
    height?: number;
    width?: number;
}
const PencilIcon: React.FC<PencilIconProps> = ({ height = 20, width = 20 }) => {

    return (
        <svg width={width.toString()} height={height.toString()} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1688 0C11.9668 0 11.7646 0.0769489 11.6106 0.231291L10.263 1.57895L13.4209 4.73684L14.7685 3.38919C15.0772 3.0805 15.0772 2.58072 14.7685 2.27282L12.727 0.231291C12.5727 0.0769489 12.3708 0 12.1688 0ZM9.07881 2.76316L0 11.8421V15H3.15785L12.2367 5.92105L9.07881 2.76316Z" fill="currentColor" />
        </svg>

    );
}
export default PencilIcon;