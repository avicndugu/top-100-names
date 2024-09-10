import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Year from '../Year';

describe('Year page tests', () => {
  test('should render Year', () => {
    render(  
      <BrowserRouter>
        <Year />
      </BrowserRouter>
    )
    expect(screen.getByText('Top 100 Baby Names in')).toBeInTheDocument();
  });
});
