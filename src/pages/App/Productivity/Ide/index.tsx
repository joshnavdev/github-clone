import { useRef } from 'react';
import {
  BellIcon,
  GitHubIcon,
  HamburgerIcon,
  LeftCodeIcon,
  LockIcon,
  PlusIcon,
  RefreshIcon,
  RightCodeIcon,
} from '../../../../components/Icons';
import CodeView from './CodeView';
import TerminalView from './TerminalView';
import './index.css';
import useIntersection from '../../../../hooks/useIntersection';

const Ide = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [isIntersecting] = useIntersection(imageRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  const className = isIntersecting ? 'build-in-animate' : '';

  return (
    <div
      id="productivity-ide"
      className="text-[#7d8590] border rounded-xl bg-gray border-gray-light relative items-center"
    >
      <div className="flex justify-between p-4 border-b border-b-gray-light">
        <div className="flex">
          <LeftCodeIcon /> <RightCodeIcon />
        </div>
        <div className="flex items-center justify-between border border-gray-light rounded-md px-2 py-1 w-auto bg-gray-dark">
          <LockIcon />
          <div className="text-white px-16 text-14">mona-github-github-g59jpq2w5w7.github.dev</div>
          <RefreshIcon />
        </div>
        <div>
          <PlusIcon />
        </div>
      </div>
      <div className="flex items-stretch">
        <div className="block border-r border-r-gray-light p-6">
          <HamburgerIcon />
        </div>
        <div className="w-6/12 min-w-0">
          <CodeView />
          <TerminalView />
        </div>
        <div className="w-6/12 block border-l border-l-gray-light overflow-hidden">
          <div className="flex justify-between items-center p-4 pb-2 text-white">
            <div>
              <HamburgerIcon width={16} height={16} />
            </div>
            <div>
              <GitHubIcon width={24} height={24} />
            </div>
            <div>
              <BellIcon width={16} height={16} />
            </div>
          </div>
          <div className="bg-[#040D21] h-full px-10 flex items-center justify-between overflow-hidden">
            <picture>
              <img
                ref={imageRef}
                className={`w-full h-auto build-in-scale-up ${className}`}
                src="https://github.githubassets.com/images/modules/site/home/globe.jpg"
                alt="Planet earth with visualization of GitHub activity crossing the globe"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ide;
