import { useRef } from 'react';
import useIntersection from '../../../../../hooks/useIntersection';

const TerminalView = () => {
  const terminalPanelRef = useRef<HTMLDivElement>(null);

  const isIntersecting = useIntersection(terminalPanelRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const rowAnimate = isIntersecting ? 'row-animate' : '';

  return (
    <div className="p-6">
      <ul className="flex text-14 mb-4">
        <li className="pr-4 text-white">Terminal</li>
        <li className="pr-4">Output</li>
        <li className="pr-4">Problems</li>
        <li className="pr-4">Debug Console</li>
      </ul>
      <div ref={terminalPanelRef} className="text-14 font-mono overflow-hidden whitespace-nowrap">
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:36] Starting &apos;watch-extension:vscode-api-tests&apos; ...
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:36] Finished &apos;clean-extension:typescript-language-features&apos; after 248 ms
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:36] Starting &apos;watch-extension:typescript-language-features&apos; ...
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:36] Finished &apos;clean-extension:php-language-features&apos; after 384 ms
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:36] Starting &apos;watch-extension:php-language-features&apos; ...
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:40] Finished &apos;clean-extension:html-language-features-server&apos; after 4.66 s
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:40] Starting &apos;watch-extension:html-language-features-server&apos; ...
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:43] Finished &apos;clean-client&apos; after 7.33 s
        </div>
        <div className={rowAnimate} style={{ visibility: isIntersecting ? 'visible' : 'hidden' }}>
          [09:43:43] Starting &apos;watch-client&apos; ...
        </div>
      </div>
    </div>
  );
};

export default TerminalView;
