import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/rootReducer';

import RecipeListitem from 'features/RecipeSearch/RecipeListitem';

export default () => {
  const { recipes } = useSelector(
    (state: RootState) => state.recipeSearch
  )

  const items = recipes
    .map((item, index) => <RecipeListitem key={index} item={item}></RecipeListitem>);
  return (<div>{items}</div>);
};