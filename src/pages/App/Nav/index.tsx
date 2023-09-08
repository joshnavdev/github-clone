import ListItem from '../../../components/ListItem';
import OpenSourceDropdown from './OperSourceDropdown';
import ProductDropdown from './ProductDropdown';
import SolutionDropdown from './SolutionDropdown';

const Nav = () => {
  return (
    <nav className="flex self-center mt-0 px-1 mb-0">
      <ul style={{ display: 'flex', alignSelf: 'center' }}>
        <ListItem Dropdown={<ProductDropdown />}>Product</ListItem>
        <ListItem Dropdown={<SolutionDropdown />}>Solutions</ListItem>
        <ListItem Dropdown={<OpenSourceDropdown />}>Open Source</ListItem>
        <ListItem>Pricing</ListItem>
      </ul>
    </nav>
  );
};

export default Nav;
