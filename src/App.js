import CreateCard from "./components/CreateCard";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Homepage from "./Homepage";
// import Products from "./Products";
// import ProductDetail from "./ProductDetail";
// import NotFound from "./NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="main-app-container">
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/CreateCard" exact component={CreateCard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>

      {/* <FlashCard></FlashCard> */}
      {/* <CreateCard /> */}
    </div>
  );
}

export default App;
