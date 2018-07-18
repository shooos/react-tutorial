import React from 'react';
import './hero-search.css';

export default class HeroSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searchTerms: []};
    this.searchHeroes = this.searchHeroes.bind(this);
  }

  searchHeroes(event) {
    const name = event.target.value;
    this.props.heroService.searchHeroes(name).then(responses => this.setState({searchTerms: responses}));
  }

  render() {
    const heroes = [];
    for (let hero of this.state.searchTerms) {
      heroes.push(
        <li key={hero.id}>
          <a href={'/detail/' + hero.id} key={hero.id}>
            {hero.name}
          </a>
        </li>
      );
    }

    return (
      <div id="search-component">
        <h4>Hero Search</h4>
        <input id="search-box" onKeyUp={this.searchHeroes} />
        <ul className="search-result">{heroes}</ul>
      </div>
    );
  }
}
