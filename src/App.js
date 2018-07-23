import React from 'react';
import {BrowserRouter, Route, Redirect, Link} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import HeroDetail from './hero-detail/HeroDetail';
import Heroes from './heroes/Heroes';
import './styles.css';
import './app.css';
import HeroService from './hero-service';
import Messages from './messages/Messages';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
    this.heroService = new HeroService(this);
    this.clearMessages = this.clearMessages.bind(this);
  }

  clearMessages() {
    this.setState({
      messages: [],
    });
  }

  render() {
    return (
      <div className="tour-of-heroes">
        <h1>Tour of Heroes</h1>
        <BrowserRouter>
          <React.Fragment>
            <nav>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/heroes">Heroes</Link>
            </nav>
            <div>
              <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
              <Route path="/dashboard" render={props => <Dashboard heroService={this.heroService} {...props} />} />
              <Route path="/detail/:id" render={props => <HeroDetail heroService={this.heroService} {...props} />} />
              <Route path="/heroes" render={props => <Heroes heroService={this.heroService} {...props} />} />
            </div>
          </React.Fragment>
        </BrowserRouter>
        <Messages messages={this.state.messages} clearMessages={this.clearMessages} />
      </div>
    );
  }
}

export default App;
