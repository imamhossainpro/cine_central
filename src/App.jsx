import "./App.css";
import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import { CartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";
import Page from "./Page";

import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
