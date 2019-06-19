import React from 'react';
import ReactDOM from 'react-dom';
import CocktailPage from './CocktailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CocktailPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
