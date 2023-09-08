import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  width?: number;
}

const Paper: FC<Props> = ({ children, width }) => {
  return (
    <div className="bg-white flex text-left rounded-lg text-black py-6" style={{ width: `${width}px` }}>
      {children}
    </div>
  );
};

Paper.defaultProps = {
  width: 500,
};

export default Paper;
