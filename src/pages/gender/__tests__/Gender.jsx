import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Gender from '../Gender';

test('should render Gender', () => {
  render(  
    <BrowserRouter>
      <Gender />
    </BrowserRouter>
  )
});