import React from 'react';
import { Recipe } from 'features/RecipeSearch/recipeSearchSlice';

type Props = {
  item: Recipe
}

export default (props: Props) => {
  const commands = props.item.commands
    .map((item, index) => (<div key={index}>{item}</div>));
  return (
    <div className="py-4 px-2">
      <div className="py-2">{props.item.title}</div>
      <div className="bg-black text-offwhite py-4 px-8">
        <pre>
          <code>
            {commands}
          </code>
        </pre>
      </div>
    </div>
  );
};