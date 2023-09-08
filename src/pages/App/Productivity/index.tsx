import { useRef } from 'react';
import Columns from '../../../components/Column';
import { ProductivityIcon } from '../../../components/Icons';
import './index.css';
import useIntersection from '../../../hooks/useIntersection';
import Ide from './Ide';
import Main from './Main';
import CardSkew from '../../../components/CardSkew';
import Button from '../../../components/ListItem/Button';
import CopilotProduct from './CopilotProduct';

const options = {
  root: null, // it is the viewport
  rootMargin: '100px', // margin around the root. Values are similar to css property. Unitless values not allowed
  threshold: 0.7,
};

const Productivity = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting] = useIntersection(containerRef, options);

  const buildInAnimate = isIntersecting ? 'build-in-animate' : '';

  return (
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-[1280px] relative mx-auto">
        <div ref={containerRef} id="productivity-information" className="flex">
          <div className="w-1/12">
            <Columns icon={<ProductivityIcon />} color="productivity" isIntersecting={isIntersecting} withAnimation />
          </div>
          <div className="w-9/12 mb-24">
            <h2 className={`text-24 mb-6 build-in-slideX-left ${buildInAnimate}`}>Productivity</h2>
            <h3 className={`mb-6 text-48 text-white build-in-slideX-left ${buildInAnimate}`}>
              <span className="text-green">Accelerate high-quality software development. </span>
              Our AI-powered platform drives innovation with tools that boost developer velocity.
            </h3>
          </div>
        </div>
        <Ide />
        <Main />
        <div className="relative z-10">
          <CopilotProduct />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
