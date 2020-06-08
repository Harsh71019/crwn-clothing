import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'





function App() {
  return (
    <div>
      {/* <Switch> //as soon as path matches it just routes the original content */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
