import React from 'react';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  <BrowserRouter>
    <div>
      <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
      <Route path="/dashboard" component="{Dashboard}" />
      <Route path="/detail/:id" component="{HeroDetail}" />
      <Route path="/heroes" component="{Heroes}" />
    </div>
  </BrowserRouter>
};

export default App;
