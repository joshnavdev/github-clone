import { useRef } from 'react';
import CardSkew from '../../../components/CardSkew';
import Button from '../../../components/ListItem/Button';
import useIntersection from '../../../hooks/useIntersection';

const options = {
  root: null, // it is the viewport
  rootMargin: '100px', // margin around the root. Values are similar to css property. Unitless values not allowed
  threshold: 0.7,
};

const ActionsProduct = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting] = useIntersection(containerRef, options);

  const buildInAnimate = isIntersecting ? 'build-in-animate' : '';
  return (
    <CardSkew>
      <div ref={containerRef} className="flex flex-col w-full">
        <div className="flex flex-col p-16 pr-32 justify-between">
          <p className="text-2xl text-[#7d8590] mb-6 font-medium">
            <em className="text-white">Github Actions</em> automates your build, test, and deployment workflow with
            simple and secure CI/CD.
          </p>
          <div>
            <Button className="text-[20px] py-1 font-semibold" size="none" onClick={() => {}}>
              Meet Github Actions
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-b-md">
          <picture>
            <img
              className={`w-full build-in-scale-fade ${buildInAnimate}`}
              width={1209}
              height={890}
              src="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png"
              alt="illu-actions"
            />
          </picture>
        </div>
      </div>
    </CardSkew>
  );
};

export default ActionsProduct;
