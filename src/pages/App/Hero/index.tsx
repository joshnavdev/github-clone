import Columns from '../../../components/Column';
import { CodeIcon } from '../../../components/Icons';
import Button from '../../../components/ListItem/Button';
import './index.css';

const Hero = () => {
  return (
    <div className="px-6">
      <div className="max-w-[1280px] relative mx-auto pt-32">
        <img
          className="absolute top-32 right-0 w-[25%]"
          src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
          alt=""
          width={500}
          height={326}
        />

        <div className="flex">
          <div className="flex flex-col relative w-[8.33333333%]">
            <img
              className="relative left-10 h-[643px] mb-4"
              src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
              width={437}
              height={736}
              alt=""
            />
            <Columns icon={<CodeIcon />} />
          </div>
          <div className="grow pt-32 mt-32 text-left z-10">
            <h1 className="mt-20 mb-6 text-80 text-white">Let’s build from here</h1>
            <p className="mb-12 text-32 w-[83.33%] text-gray-500">
              The AI-powered developer platform to build, scale, and deliver secure software.
            </p>
            <div className="flex w-full">
              <form className="w-5/12 relative">
                <div className="grid grid-cols-12">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="col-span-7 h-12 px-4 rounded-l focus-visible:border-2 focus-visible:outline-none focus-visible:border-blue"
                  />
                  <button
                    type="submit"
                    className="col-span-5 h-12 px-4 rounded-r bg-purple text-white font-bold btn-shadow-hover"
                  >
                    Sign up for GitHub
                  </button>
                </div>
              </form>
              <div className="border-l border-[#30363d] mx-4" />
              <Button size="lg" color="purple" onClick={() => console.log('click')} border>
                Start a free enterprise trial
              </Button>
            </div>
            <div className="my-32 text-[#7d8590]">
              <p className="mb-3">Trusted by the world’s leading organizations ↘︎</p>
              <div className="flex justify-between items-center flex-wrap w-11/12">
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"
                  alt="Stripe logo"
                  height={44}
                  className="my-3 h-11"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"
                  alt="Pinterest logo"
                  height={44}
                  className="my-3 h-11"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"
                  alt="KPMG logo"
                  height={44}
                  className="my-3 h-11"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"
                  alt="Mercedes-Benz logo"
                  height={44}
                  className="my-3 h-11"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"
                  alt="P&amp;G logo"
                  height={32}
                  className="my-3 h-8"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"
                  alt="Telus logo"
                  height={32}
                  className="my-3 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
