import Logo from "./assets/logo.svg";
import RingIcon from "./assets/ring.svg";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import ShoppingCartIcon from "./assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function HandleShowCartModal() {
    setShowCart(true);
  }
  function closeCartModal() {
    setShowCart(false);
  }

  return (
    <>
      {showCart && <CartDetails onClose={closeCartModal} />}
      <header>
        <nav className='container flex items-center justify-between space-x-10 py-6'>
          <a href='index.html'>
            <img src={Logo} width='139' height='26' alt={Logo} />
          </a>

          <ul className='flex items-center space-x-5'>
            <li>
              <a
                className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                href='#'
              >
                <img src={RingIcon} width='24' height='24' alt={RingIcon} />
              </a>
            </li>
            <li>
              <a
                className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                href='#'
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? SunIcon : MoonIcon}
                  width='24'
                  height='24'
                  alt={MoonIcon}
                />
              </a>
            </li>
            <li>
              <a
                onClick={() => HandleShowCartModal()}
                className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                href='#'
              >
                <img
                  src={ShoppingCartIcon}
                  width='24'
                  height='24'
                  alt={ShoppingCartIcon}
                />
                {state.cartData.length > 0 && (
                  <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]'>
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
