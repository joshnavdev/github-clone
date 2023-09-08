interface Props {
  children: React.ReactNode;
  value: number;
  onChange: (event: any, newValue: number) => void;
}

const Tabs = ({ children, value, onChange }: Props) => {
  const activeClass = 'text-white bg-gray-dark rounded-t-md border border-gray-light border-b-gray-dark';

  return (
    <div className="p-2 pb-0 border-b border-b-gray-light">
      <nav className="flex text-gray-muted -mb-[1px]">
        {children.map((child) => {
          return (
            <button
              key={child.props.value}
              onClick={(event) => onChange(event, child.props.value)}
              type="button"
              className={`flex items-center gap-1 justify-center text-sm px-4 py-2 group ${
                value === child.props.value && activeClass
              }`}
            >
              {child}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Tabs;
