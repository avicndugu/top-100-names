import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import AllBottomLinks from '../AllBottomLinks';

test('should render AllBottomLinks', () => {
  render(
    <BrowserRouter>
      <AllBottomLinks />
    </BrowserRouter>
  )
})