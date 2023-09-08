import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { ArrowListIcon } from '../Icons';
import './index.css';

interface Props {
  children: ReactNode;
  Dropdown?: ReactNode;
  onClick?: () => void;
  border?: boolean;
}

const ListItem: FC<Props> = ({ children, Dropdown, onClick, border }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const containerClass = classNames(' text-gray-50 hover:text-gray-400 group', {
    'px-1 pr-3 py-1': !border,
    'border border-gray-50 hover:border-gray-400 rounded-md px-[8px] py-1': border,
  });

  return (
    <div className="relative list-item">
      <li className={containerClass}>
        <button type="button" onClick={handleOnClick} className="flex items-center">
          <span>{children}</span>
          {Dropdown && (
            <div className="group-hover:translate-y-[2px]">
              <ArrowListIcon />
            </div>
          )}
        </button>
      </li>
      <div className="dropdown absolute -left-5 max-w-[500px]">{Dropdown}</div>
    </div>
  );
};

ListItem.defaultProps = {
  Dropdown: null,
  onClick: undefined,
  border: false,
};

export default ListItem;
