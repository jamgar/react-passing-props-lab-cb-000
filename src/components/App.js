import React from 'react';
import { Component } from 'react'

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;
class App extends Component {
  constructor() {
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilter = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <div>
        <FruitBasket
          filters={this.state.filters}
          fruit={this.state.fruit}
          currentFilter={this.state.currentFilter}
          updateFilterCallback={this.updateFilter}/>
      </div>
    )
  }
}

export default App;
