import { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import useStore from '../../zustand/store';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Header from '../Header/Header';
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import FindAFriend from '../FindAFriend/FindAFriend';
import FriendsPage from '../FriendsPage/FriendsPage';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            exact path="/"
            element={

              <HomePage /> // Render HomePage for authenticated user.

            }
          />
          <Route
            exact path="/about"
            element={
              <>
                <h2>About Me</h2>
                <p>
                  I love cooking! I hope you like the food too!                </p>

              </>
            }
          />
          <Route
            path="*"
            element={
              <h2>404 Page</h2>
            }
          />
        </Routes>
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}


export default App;
