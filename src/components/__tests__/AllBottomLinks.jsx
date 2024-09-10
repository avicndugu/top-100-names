import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import AllBottomLinks from '../AllBottomLinks';

test('should render AllBottomLinks component', () => {
  
  render(
    <BrowserRouter>
      <AllBottomLinks />
    </BrowserRouter>
  )
  expect(screen.getByText('Top 100 Baby Names By Year')).toBeInTheDocument();
  expect(screen.getByText('Top 100 Girls Names By Year')).toBeInTheDocument();
  expect(screen.getByText('Top 100 Boys Names By Year')).toBeInTheDocument();

})