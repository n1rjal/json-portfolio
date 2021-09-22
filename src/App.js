import NavBar from "./components/navbar/Navbar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";

import { DataContextProvider } from "./context/datacontext";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/aboutme">
                <AboutMe />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route>
                <h1>404 not found</h1>
              </Route>
            </Switch>
          </Router>
          <Portfolio />
        </header>
      </div>
    </DataContextProvider>
  );
}

export default App;
