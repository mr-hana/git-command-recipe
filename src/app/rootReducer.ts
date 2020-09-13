import { combineReducers } from '@reduxjs/toolkit';
import recipeSearchSlice from 'features/RecipeSearch/recipeSearchSlice';

const rootReducer = combineReducers({
  recipeSearch: recipeSearchSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;