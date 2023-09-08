const Code = () => {
  return (
    <div className="flex text-16 font-mono">
      <div className="text-[#6e7681] text-right">
        <div className="pr-2">1</div>
        <div className="pr-2">2</div>
        <div className="pr-2">3</div>
        <div className="pr-2">4</div>
        <div className="pr-2">5</div>
        <div className="pr-2">6</div>
        <div className="pr-2">7</div>
        <div className="pr-2">8</div>
        <div className="pr-2">9</div>
        <div className="pr-2">10</div>
        <div className="pr-2">11</div>
        <div className="pr-2">12</div>
      </div>
      <div className="flex-1 text-white overflow-x-scroll">
        <pre>
          {'<'}
          <span className="pl-t">div</span> <span className="pl-a">class</span>=
          <span className="pl-v">&quot;position-absolute width-full color-bg-default&quot;</span>{' '}
          <span className="pl-a">style</span>=<span className="pl-v">&quot;bottom: -4rem;&quot;</span>
          {'>'}
        </pre>
        <pre>
          {'  <'}
          <span className="pl-t">div</span> <span className="pl-a">class</span>=
          <span className="pl-v">&quot;container-xl p-responsive&quot;</span>
          {'>'}
        </pre>
        <pre>
          {'    <'}
          <span className="pl-t">div</span> <span className="pl-a">class</span>=
          <span className="pl-v">&quot;d-flex flex-justify-center flex-lg-justify-end color-bg-default&quot;</span>
          {'>'}
        </pre>
        <pre>
          {'      <'}
          <span className="pl-t">div</span> <span className="pl-a">class</span>=
          <span className="pl-v">
            &quot;col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none&quot;
          </span>
          {'>'}
        </pre>
        <pre>
          {'        <'}
          <span className="pl-t">picture</span>
          {'>'}
        </pre>
        <pre>
          {'          <'}
          <span className="pl-t">source</span> <span className="pl-a">srcset</span>=
          <span className="pl-v">&quot;astro-mona.webp&quot;</span> <span className="pl-a">type</span>=
          <span className="pl-v">&quot;image/webp&quot;</span>
          {'>'}
        </pre>
        <pre>
          {'          <'}
          <span className="pl-t">img</span> <span className="pl-a">src</span>=
          <span className="pl-v">&quot;astro-mona.png&quot;</span> <span className="pl-a">width</span>=
          <span className="pl-v">&quot;960&quot;</span> <span className="pl-a">height</span>=
          <span className="pl-v">&quot;967&quot;</span> <span className="pl-a">class</span>=
          <span className="pl-v">&quot;home-astro-mona width-full position-absolute bottom-0 height-auto&quot;</span>{' '}
          <span className="pl-a">alt</span>=
          <span className="pl-v">&quot;Mona looking at GitHub activity across the globe&quot;</span>
          {'>'}
        </pre>
        <pre>
          {'        </'}
          <span className="pl-t">picture</span>
          {'>'}
        </pre>
        <pre>
          {'      </'}
          <span className="pl-t">div</span>
          {'>'}
        </pre>
        <pre>
          {'    </'}
          <span className="pl-t">div</span>
          {'>'}
        </pre>
        <pre>
          {'  </'}
          <span className="pl-t">div</span>
          {'>'}
        </pre>
        <pre>
          {'</'}
          <span className="pl-t">div</span>
          {'>'}
        </pre>
      </div>
    </div>
  );
};

export default Code;
