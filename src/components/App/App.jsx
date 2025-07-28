import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Services from "../Services/Services";
import Nav from '../Nav/Nav';


function App() {

  return (
    <>
      <header>
        <h1 className="green-text">Leb's Kitchen</h1>
        <Nav />
        {/* <Header /> */}
      </header>
      <main>
        <Routes>
          <Route
            exact path="/"
            element={
              <HomePage />
            }
          />
          <Route
            exact path="/services"
            element={
              <Services />
            }
          />
          <Route
            exact path="/about"
            element={
              <>
                <h2>About Me</h2>
                <p>
                  I love cooking! I hope you like the food too!                
                </p>
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
