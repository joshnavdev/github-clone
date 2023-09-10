import throttle from 'lodash/throttle';
import { useRef, useState, useMemo, MouseEvent } from 'react';
import './index.css';
import classNames from 'classnames';

const calculateXRotation = (height: number, y: number) => {
  return (2 * (y - 1)) / (height - 1) - 1;
};

const calculateYRotation = (width: number, x: number) => {
  return ((3 * (x - 1)) / (width - 1) - 1.5) * -1;
};

interface Props {
  children: React.ReactNode;
  color?: 'green';
}

const CardSkew = ({ children, color }: Props) => {
  const containerSkewRef = useRef<HTMLDivElement>(null);
  const containerHoverRef = useRef<HTMLDivElement>(null);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMoveSkew = useMemo(
    () =>
      throttle((event: MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = containerSkewRef.current!.getBoundingClientRect();
        const posX = event.clientX - left;
        const posY = event.clientY - top;

        setRotation({
          x: calculateXRotation(height, posY),
          y: calculateYRotation(width, posX),
        });
      }, 75),
    []
  );

  const handleMouseMoveHover = useMemo(
    () =>
      throttle((event: MouseEvent<HTMLDivElement>) => {
        const rect = containerHoverRef.current!.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setHoverPosition({ x, y });
      }, 75),
    []
  );

  const CircleClasses = classNames('absolute hover-mouse-blur -z-10', {
    'bg-green': color === 'green',
  });

  return (
    <div
      ref={containerSkewRef}
      className="card-skew mb-8 overflow-hidden rounded-xl"
      onMouseMoveCapture={handleMouseMoveSkew}
      onMouseLeave={() => setTimeout(() => setRotation({ x: 0, y: 0 }), 200)}
      style={{
        transform: `perspective(700px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div
        ref={containerHoverRef}
        onMouseMoveCapture={handleMouseMoveHover}
        className="h-full flex flex-row z-10 justify-between bg-gray rounded-xl border border-gray-light relative"
      >
        {children}
        <div className={CircleClasses} style={{ transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)` }} />
      </div>
    </div>
  );
};

CardSkew.defaultProps = {
  color: 'green',
};

export default CardSkew;
