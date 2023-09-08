import { GitHubIcon, SearchIcon, SearchKeyIcon } from '../../components/Icons';
import ListItem from '../../components/ListItem';
import Nav from './Nav';

function Header() {
  return (
    <div className="relative text-[16px]">
      <header className="absolute right-0 left-0 py-3">
        <div className="flex items-center relative flex-row z-[1]">
          <div className="flex w-auto">
            <a href="/" className="text-white mx-4">
              <GitHubIcon width={32} height={32} />
            </a>
          </div>
          <div className="flex w-full p-0 self-center text-center">
            <div className="overflow-visible flex justify-between self-end w-full">
              <Nav />
              <div className="flex gap-2 pr-1 mx-3 my-2">
                <button
                  type="button"
                  className="my-[2px] mr-2 inline-flex items-center justify-between gap-2 w-[324px] rounded-md px-2 py-1 text-[14px] text-[rgba(255,255,255,.75)] bg-[rgba(46,55,74,.82)] ring-1 ring-gray-500"
                >
                  <div className="text-gray-500">
                    <SearchIcon />
                  </div>
                  <span className="grow text-left">Search or jump to...</span>
                  <div className="text-gray-500">
                    <SearchKeyIcon />
                  </div>
                </button>
                <ListItem onClick={() => console.log('signin')}>Sign in</ListItem>
                <ListItem onClick={() => console.log('signup')} border>
                  Sign up
                </ListItem>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
