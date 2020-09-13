import React from 'react';
import SearchBox from 'features/RecipeSearch/SearchBox';
import Recipes from 'features/RecipeSearch/RecipeList';

function App() {
  return (
    <div className="grid h-full py-8 px-4" style={{ gridTemplateRows: "50px 1fr" }}>
      <div>
        <SearchBox />
      </div>
      <div className="overflow-y-scroll">
        <Recipes />
      </div>
    </div>
  );
}

export default App;
