interface Props {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, index, value }: Props) => {
  return (
    <div
      className="relative text-base bg-gray-dark p-4 text-gray-white rounded-b-md"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && children}
    </div>
  );
};

export default TabPanel;
