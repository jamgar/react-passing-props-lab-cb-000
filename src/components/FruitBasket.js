import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, updateFilter }) => {


  return (
    <div className="fruit-basket">
      <Filter filters={filters} handleChange={updateFilter} />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;
