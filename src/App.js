import NavBar from "./components/navbar/Navbar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Loader from "./components/loading/Loading";
import Contact from "./components/contact/Contact";

import React, { useState, useEffect } from "react";
import DataContext from "./context/datacontext";

function App() {
  const [projectObject, setProject] = useState({});
  useEffect(() => {
    fetch("/json-data/projects.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
  if (!loading) {
    return (
      <DataContext.Provider value={projectObject}>
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
          </header>
        </div>
      </DataContext.Provider>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
}

export default App;
