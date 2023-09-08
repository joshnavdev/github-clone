import { FC } from 'react';
import { ExternalLinkIcon, IconProps } from '../Icons';
import './index.css';

interface Props {
  primary?: string;
  secondary?: string;
  href?: string;
  Icon?: FC<IconProps>;
  tight?: boolean;
  external?: boolean;
}
const Link: FC<Props> = ({ href, primary, secondary, Icon, tight, external }) => {
  return (
    <li className="link">
      <a
        href={href}
        className={`flex text-left items-center gap-5 group group-hover:text-[#0969da] pt-2 ${tight ? 'pb-2' : 'pb-4'}`}
      >
        {Icon && (
          <div className="text-gray-1 group-hover:text-[#0969da]">
            <Icon viewBox="0 0 24 24" />
          </div>
        )}
        <div className="text-gray-1 text-[14px] leading-4 group-hover:text-[#0969da]">
          <div className="text-black text-[16px] leading-5 font-semibold group-hover:text-[#0969da]">{primary}</div>
          <div className="flex">
            {secondary}
            {external && (
              <div className="external-link ml-1">
                <ExternalLinkIcon />
              </div>
            )}
          </div>
        </div>
      </a>
    </li>
  );
};

Link.defaultProps = {
  primary: '',
  secondary: '',
  href: '',
  Icon: undefined,
  tight: false,
  external: false,
};

export default Link;
