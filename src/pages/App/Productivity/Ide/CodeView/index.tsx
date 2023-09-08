import TerminalView from '../TerminalView';
import Code from './Code';
import './index.css';

const CodeView = () => {
  return (
    <div className="border-b border-b-gray-light">
      <ul className="px-4 pt-4 flex list-none">
        <li className="px-4 py-2 text-14 bg-gray-dark rounded-t-lg text-white">index.html</li>
        <li className="px-4 py-2 text-14">script.js</li>
        <li className="px-4 py-2 text-14">package.json</li>
      </ul>
      <div className="bg-gray-dark p-6 text-16">
        <Code />
      </div>
    </div>
  );
};

export default CodeView;
