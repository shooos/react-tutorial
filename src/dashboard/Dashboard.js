import React from 'react';
import './dashboard.css';
import HeroSearch from '../hero-search/HeroSearch';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {heroes: []};
  }

  componentWillMount() {
    this.getHeroes();
  }

  getHeroes() {
    this.props.heroService.getHeroes().then(response => this.setState({heroes: response}));
  }

  render() {
    const heroes = [];
    for (let hero of this.state.heroes.slice(1, 5)) {
      heroes.push(
        <a className="col-1-4" href={'/detail/' + hero.id} key={hero.id}>
          <div className="module hero">
            <h4>{hero.name}</h4>
          </div>
        </a>
      );
    }

    return (
      <React.Fragment>
        <h3 className="dashboard-title">Top Heroes</h3>
        <div className="grid grid-pad">{heroes}</div>
        <HeroSearch heroService={this.props.heroService} />
      </React.Fragment>
    );
  }
}
