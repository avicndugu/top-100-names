import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Year from '../Year';

test('should render Year', () => {
  render(  
    <BrowserRouter>
      <Year />
    </BrowserRouter>
  )
});