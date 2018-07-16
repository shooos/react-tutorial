import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    const heroes = [];

    return (
      <>
        <h3>Top Heroes</h3>
        <div class="grid grid-pad">
          {heroes}
        </div>
      </>
    );
  }
}