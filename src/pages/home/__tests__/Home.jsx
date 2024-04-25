import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

test('should render Home', () => {
  render(  
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
});