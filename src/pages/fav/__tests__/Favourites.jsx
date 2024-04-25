import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Favourites from '../Favourites';

test('should render Favourites', () => {
  render(  
    <BrowserRouter>
      <Favourites />
    </BrowserRouter>
  )
});