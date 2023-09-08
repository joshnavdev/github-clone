import range from 'lodash/range';
import { useRef, useState } from 'react';
import { CopilotIcon, CopilotV2Icon, GolangIcon, JavaScriptIcon, PythonIcon } from '../../../../components/Icons';
import Tabs from '../../../../components/Tabs';
import Tab from '../../../../components/Tab';
import TabPanel from '../../../../components/TabPanel';
import {
  CodeLine,
  DefaultToken,
  FunctionToken,
  KeywordToken,
  OperatorToken,
  TypeToken,
  ValueToken,
} from '../../../../components/Code';
import useIntersection from '../../../../hooks/useIntersection';

const stringCodeToTokens = (code: string) => {
  const codeSplit = code.split(';;');

  return codeSplit.map((subCode, index) => {
    const subCodeSplit = subCode.split('::');
    let Component = DefaultToken;

    if (subCodeSplit[0] === 'k') {
      Component = KeywordToken;
    }

    if (subCodeSplit[0] === 'd') {
      Component = DefaultToken;
    }

    if (subCodeSplit[0] === 'f') {
      Component = FunctionToken;
    }

    if (subCodeSplit[0] === 'o') {
      Component = OperatorToken;
    }

    if (subCodeSplit[0] === 'v') {
      Component = ValueToken;
    }

    if (subCodeSplit[0] === 't') {
      Component = TypeToken;
    }

    return <Component key={index}>{subCodeSplit[1]}</Component>;
  });
};

const CopilotIde = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isIntersecting = useIntersection(containerRef, {
    root: null,
    rootMargin: '100px',
    threshold: 0.8,
  });

  const [active, setActive] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, index: number) => {
    setActive(index);
  };

  const codeLineProps = {
    selected: true,
    isIntersecting,
  };

  return (
    <div
      ref={containerRef}
      className="border border-gray-light mt-10 mr-10 mb-16 rounded-md bg-gray"
      style={{
        boxShadow:
          '0 3px 2px rgba(0,0,0,.04),0 7px 5px rgba(0,0,0,.02),0 13px 10px rgba(0,0,0,.02),0 22px 17px rgba(0,0,0,.02)',
      }}
    >
      <Tabs value={active} onChange={handleTabChange}>
        <Tab value={0} Icon={PythonIcon} label="draw_scatterplot.py" />
        <Tab value={1} Icon={JavaScriptIcon} label="time.js" />
        <Tab value={2} Icon={GolangIcon} label="memoize.go" />
      </Tabs>
      <TabPanel value={active} index={0}>
        <div className="flex">
          <div className="text-gray-subtle text-right font-mono">
            {range(1, 9).map((number) => (
              <div key={number} className="pr-2">
                {number}
              </div>
            ))}
          </div>
          <div className="flex-1">
            <CodeLine>{stringCodeToTokens('k::import ;;d::matplotlib.pyplot ;;k::as ;;d::plt')}</CodeLine>
            <CodeLine> </CodeLine>
            <CodeLine isIntersecting={isIntersecting} animate>
              {stringCodeToTokens('k::def ;;f::draw_scatterplot;;d::(x_values;;o::, ;;d::y_values):')}
            </CodeLine>
            <CodeLine {...codeLineProps}>
              {stringCodeToTokens('d::    plt.;;f::scatter;;d::(x_values, ;;d::y_values, s;;o::=;;v::20;;d::)')}
            </CodeLine>
            <CodeLine {...codeLineProps}>
              {stringCodeToTokens('d::    plt.;;f::title;;d::(;;v::"Scatter Plot";;d::)')}
            </CodeLine>
            <CodeLine {...codeLineProps}>
              {stringCodeToTokens('d::    plt.;;f::xlabel;;d::(;;v::"x values";;d::)')}
            </CodeLine>
            <CodeLine {...codeLineProps}>
              {stringCodeToTokens('d::    plt.;;f::ylabel;;d::(;;v::"y values";;d::)')}
            </CodeLine>
            <CodeLine {...codeLineProps}>{stringCodeToTokens('d::    plt.;;f::show;;d::()')}</CodeLine>
            <div
              className={`p-2 flex items-center absolute text-sm font-bold gap-1 bg-blue rounded-md rounded-tl-[0] row-animation ${
                isIntersecting && 'row-is-visible'
              }`}
            >
              <CopilotV2Icon height={15} width={16} viewBox="0 0 16 15" />
              Copilot
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={active} index={1}>
        <div className="flex">
          <div className="text-gray-subtle text-right">
            {range(1, 8).map((number) => (
              <div key={number} className="pr-2">
                {number}
              </div>
            ))}
          </div>
          <div className="flex-1 time.js">
            <CodeLine>{stringCodeToTokens('k::const ;;d::seconds ;;o::= ;;v::3600')}</CodeLine>
            <CodeLine>{stringCodeToTokens('k::const ;;d::minutes ;;o::= ;;d::seconds ;;o::/ ;;v::60')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::const ;;d::hours ;;o::= ;;d::minutes ;;o::/ ;;v::60')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::const ;;d::days ;;o::= ;;d::hours ;;o::/ ;;v::24')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::const ;;d::weeks ;;o::= ;;d::days ;;o::/ ;;v::7')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::const ;;d::months ;;o::= ;;d::days ;;o::/ ;;v::30')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::const ;;d::years ;;o::= ;;d::months ;;o::/ ;;v::12')}</CodeLine>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={active} index={2}>
        <div className="flex">
          <div className="text-gray-subtle text-right">
            {range(1, 12).map((number) => (
              <div key={number} className="pr-2">
                {number}
              </div>
            ))}
          </div>
          <div className="flex-1 memoize.go">
            <CodeLine>{stringCodeToTokens('k::package ;;d::main')}</CodeLine>
            <CodeLine>
              {stringCodeToTokens(
                'k::  func ;;f::Memoize;;d::(fn ;;k::func;;d::(;;t::int;;d::) ;;t::int;;d::) ;;k::func;;d::(;;t::int;;d::) ;;t::int ;;d::{'
              )}
            </CodeLine>
            <CodeLine selected>
              {stringCodeToTokens(
                'd::    cache ;;o:::= ;;k::make;;d::(;;k::map;;d::[;;t::int;;d::];;t::int;;d::) ;;o::;;d::;;d::;;d::'
              )}
            </CodeLine>
            <CodeLine selected>
              {stringCodeToTokens('k::    return ;;k::func;;d::(n ;;t::int;;d::) ;;t::int ;;d::{')}
            </CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::      if ;;d::v, ok ;;o:::= ;;d::cache[n]; ok {')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::        return ;;d::v')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('d::      }')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('d::      cache[n] ;;o::= ;;f::fn;;d::(n)')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('k::      return ;;d::cache[n]')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('d::    }')}</CodeLine>
            <CodeLine selected>{stringCodeToTokens('d::  }')}</CodeLine>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};

export default CopilotIde;
