import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  selected?: boolean;
  isIntersecting?: boolean;
  animate?: boolean;
}

const CodeLine = ({ children, selected, isIntersecting, animate }: Props) => {
  const classes = classNames('border-l-[2px] w-fit row-animation font-mono', {
    'border-l-blue bg-[#388bfd1a]': selected,
    'border-l-gray-dark': !selected,
    'row-is-visible': isIntersecting && !animate,
    'typing-animation': isIntersecting && animate,
  });

  return (
    <pre className={classes} style={{ opacity: isIntersecting && !animate ? 0 : 1 }}>
      <span>{children}</span>
    </pre>
  );
};

CodeLine.defaultProps = {
  selected: false,
  isIntersecting: false,
  animate: false,
};

export default CodeLine;
