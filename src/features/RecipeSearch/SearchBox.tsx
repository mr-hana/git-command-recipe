import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from 'features/RecipeSearch/recipeSearchSlice';

export default () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState('');
  React.useEffect(() => {
    dispatch(search(keyword));
  }, [keyword, dispatch])

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setKeyword(e.currentTarget.value);
  };

  return (
    <div className="w-full px-3">
      <input id="search" type="search" placeholder="search..." value={keyword} onChange={onChange}
        className="appearance-none block w-full bg-gray-light text-gray-dark border border-gray-light rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray" />
    </div>
  )
}
