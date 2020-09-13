import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import json from 'data/index.json';

export type Recipe = {
  title: string
  commands: string[]
}

type RecipeState = {
  keyword: string
  recipes: Recipe[]
}

const initialState: RecipeState = {
  keyword: '',
  recipes: []
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
      const recipeFilter = recipeFilterFactory(state.keyword);
      const recipes: Recipe[] = json.recipes
        .filter(recipeFilter)
        .map(item => item as Recipe);
      state.recipes = recipes;
    }
  }
})

export const {
  search
} = recipesSlice.actions

export default recipesSlice.reducer;

const recipeFilterFactory = (keyword: string) => (recipe: Recipe) => {
  const list = [recipe.title, ...recipe.commands];
  return list.some(item => item.includes(keyword));
}
