import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import HomePage from '../HomePage/HomePage';
import Services from "../Services/Services";
import Nav from '../Nav/Nav';
import ContactInfo from "../ContactInfo/ContactInfo";


function App() {

  return (
    <div>
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
              <div className="green-text">
                <h2>About Me</h2>
                <p>
                  I love cooking! I hope you like the eating my food!
                </p>
                <ContactInfo />
              </div>
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
    </div>
  );
}


export default App;
