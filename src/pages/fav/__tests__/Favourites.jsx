import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Favourites from '../Favourites';

describe('Favourites page tests', () => {
  test('should render Favourites', () => {
    render(  
      <BrowserRouter>
        <Favourites />
      </BrowserRouter>
    )
    expect(screen.getByText('Your Favourite Baby Names')).toBeInTheDocument();
  });
})