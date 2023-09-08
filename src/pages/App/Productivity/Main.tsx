import { useRef } from 'react';
import Button from '../../../components/ListItem/Button';
import useIntersection from '../../../hooks/useIntersection';

const options = {
  root: null, // it is the viewport
  rootMargin: '-150px',
  treshold: 0.5,
};

const Main = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersection(containerRef, options);

  const buildInAnimate = isIntersecting ? 'build-in-animate' : '';

  return (
    <main ref={containerRef} className={`relative flex ${buildInAnimate}`}>
      <img
        className="absolute top-0 right-0 h-auto w-11/12"
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
        alt="productivity"
        width={2712}
        height={2712}
      />
      <div className="w-1/12 relative flex items-center flex-col">
        <div
          className={`z-10 h-full w-[3px] build-in-scale-top ${buildInAnimate}`}
          style={{ background: 'linear-gradient(#0d1117, #2ea045, #2ea045, #2ea043, #0d1117)' }}
        />
        <img
          className={`absolute h-auto bottom-6 build-in-opacity ${buildInAnimate}`}
          style={{ left: 'calc(50% - 2px)', transitionDelay: '100ms' }}
          height="auto"
          src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg"
          alt="ide"
        />
      </div>
      <div className="w-11/12 ml-10 z-10">
        <div className="my-16 -mx-6 pb-12 flex flex-row relative items-center">
          <div className={`w-6/12 py-4 px-6 mb-2 build-in-slideX-right ${buildInAnimate}`}>
            <div className="pr-6">
              <h2 className="text-24 text-[#7d8590] mb-4">
                <em className="text-white">GitHub Codespaces</em> offers a complete dev environment in seconds, so you
                can code, build, test, and open pull requests from any repo anywhere.
              </h2>
              <Button className="text-[20px] py-1 font-semibold" size="none" onClick={() => console.log('click')}>
                Check out GitHub Codespaces
              </Button>
            </div>
          </div>
          <div className="w-6/12 py-4 px-6">
            <div className="relative">
              <div className="flex flex-col relative">
                <div
                  className={`max-w-[300px] -mt-[30%] mr-[10%] self-end relative overflow-hidden rounded-md z-20 build-in-slideX-left ${buildInAnimate}`}
                  style={{
                    transitionDelay: '100ms',
                    boxShadow:
                      '0 0 0 1px #000,0 30px 30px rgba(0,0,0,.07),0 15px 15px rgba(0,0,0,.06),0 10px 8px rgba(0,0,0,.05),0 4px 4px rgba(0,0,0,.04),0 2px 2px rgba(0,0,0,.03)',
                  }}
                >
                  <img
                    className="w-full h-auto block"
                    src="https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png"
                    alt="context-menu"
                  />
                  <img
                    className="absolute w-[10%] h-auto right-[20%] bottom-[23%]"
                    src="https://github.githubassets.com/images/modules/site/codespaces/illo-cursor.png"
                    alt="cursor"
                    width={60}
                    height={96}
                  />
                </div>
                <div
                  className={`max-w-[373px] -mt-[20%] rounded-md relative overflow-hidden z-10 build-in-slideX-right ${buildInAnimate}`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <img
                    className="w-full"
                    src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png"
                    alt="ports"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4 mb-32">
          <div
            className={`py-4 w-6/12 text-green build-in-slideX-left ${buildInAnimate}`}
            style={{
              transitionDelay: '600ms',
            }}
          >
            <div className="gradiant-border relative px-2 inline-block">
              <span className="text-xs leading-5 font-semibold">Did you know?</span>
            </div>
            <h3 className="mt-4 mb-2 text-64">22% increase</h3>
            <p className="text-white text-xl font-medium">
              in developer productivity
              <br />
              after three years with GitHub<sup>1</sup>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
