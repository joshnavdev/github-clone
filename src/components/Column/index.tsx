import { FC } from 'react';
import './index.css';
import classNames from 'classnames';

const colors = {
  code: {
    blur: '#dd7df7',
    gradient: 'linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)',
  },
  productivity: {
    blur: '#7ee787',
    gradient: 'linear-gradient(#56d364, #2ea043, #0d1117)',
  },
};

interface Props {
  icon: React.ReactNode;
  color?: keyof typeof colors;
  isIntersecting?: boolean;
  withAnimation?: boolean;
}

const Columns: FC<Props> = ({ icon, color, withAnimation, isIntersecting }) => {
  const { blur, gradient } = colors[color!];

  const iconClasses = classNames('relative z-[1] text-white', {
    'build-in-opacity': withAnimation,
    'build-in-animate': withAnimation && isIntersecting,
  });

  const lineClasses = classNames('w-[3px] h-full rounded mx-auto', {
    'build-in-scale-top': withAnimation,
    'build-in-animate': withAnimation && isIntersecting,
  });

  return (
    <div className="flex flex-col relative h-full">
      <div className="relative mx-auto mb-6">
        <div className={iconClasses}>
          {icon}
          <span
            className="absolute h-full w-full left-0 top-0"
            style={{
              backgroundColor: blur,
              filter: 'blur(17px)',
            }}
          />
        </div>
      </div>
      <div className={lineClasses} style={{ background: gradient }} />
    </div>
  );
};

Columns.defaultProps = {
  color: 'code',
  isIntersecting: false,
  withAnimation: false,
};

export default Columns;
