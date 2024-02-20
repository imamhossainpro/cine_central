import TrendingIcon from "./assets/icons/trending.svg";
import NewReleaseIcon from "./assets/icons/newRelease.svg";
import ComingSoonIcon from "./assets/icons/commingSoon.svg";
import FavouriteIcon from "./assets/icons/favourite.svg";
import WatchLaterIcon from "./assets/icons/watchLater.svg";

const Sidebar = () => {
  return (
    <aside>
      <ul className='space-y-2'>
        <li>
          <a
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black'
            href='#'
          >
            <img src={TrendingIcon} width='24' height='24' alt='' />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'
          >
            <img src={NewReleaseIcon} width='24' height='24' alt='' />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'
          >
            <img src={ComingSoonIcon} width='24' height='24' alt='' />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'
          >
            <img src={FavouriteIcon} width='24' height='24' alt='' />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'
          >
            <img src={WatchLaterIcon} width='24' height='24' alt='' />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
