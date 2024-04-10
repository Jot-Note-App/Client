import React from 'react';
import Popup from 'reactjs-popup';

interface TooltipProps {
    text: string,
    children: React.JSX.Element,
    offsetX?: number,
    offsetY?: number,
    delay?: number
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, offsetX = 0, offsetY = 0, delay = 800 }) => {
    return (
        <Popup
            trigger={children}
            arrow
            on={'hover'}
            position={['bottom center', 'bottom left', 'bottom right', 'top center', 'top left', 'top right', 'right center', 'left center']}
            offsetX={offsetX}
            offsetY={offsetY}
            keepTooltipInside
            mouseEnterDelay={delay}
        >
            <div className='py-1 px-2 bg-black text-white rounded-md text-regular'> {text} </div>
        </Popup >
    );
}
export default Tooltip;