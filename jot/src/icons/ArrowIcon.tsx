import React from 'react';
type Orientation = 'up' | 'down' | 'left' | 'right';
interface ArrowIconProps {
    orientation?: Orientation;
}
const ArrowIcon: React.FC<ArrowIconProps> = ({ orientation = "down" }) => {
    let transformDegrees = 0;
    switch (orientation) {
        case 'up':
            transformDegrees = 180;
            break;
        case 'left':
            transformDegrees = 90;
            break;
        case 'right':
            transformDegrees = -90;
            break;
        default:
            break;
    }
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${transformDegrees}deg)` }}>
            <path d="M18 9L12 15L6 9" stroke='currentColor' strokeWidth="2" />
        </svg>
    );
};
export default ArrowIcon;