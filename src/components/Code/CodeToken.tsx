import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  type?: keyof typeof types;
}

const types = {
  keyword: 'text-[#ff7b72]',
  function: 'text-[#d2a8ff]',
  operator: 'text-[#79c0ff]',
  value: 'text-[#79c0ff]',
  type: 'text-[#c9d1d9]',
  default: 'text-white',
};

const CodeToken = ({ children, type }: Props) => {
  const classes = classNames({
    [types[type!]]: true,
  });

  return <span className={classes}>{children}</span>;
};

CodeToken.defaultProps = {
  type: 'default',
};

export default CodeToken;
