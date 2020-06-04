import BluePage from "./pages/BluePage";
import Menu from "./components/Menu";
import React from "react";
import RedPage from "./pages/RedPage";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
