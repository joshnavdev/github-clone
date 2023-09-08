/* eslint-disable react/no-unused-prop-types */
import { IconProps } from '../Icons';

interface Props {
  value: number;
  label: string;
  Icon: React.FC<IconProps>;
}

const Tab = ({ label, Icon }: Props) => {
  return (
    <>
      <Icon viewBox="0 0 24 24" width={16} height={16} />
      <span className="group-hover:text-white">{label}</span>
    </>
  );
};

export default Tab;
