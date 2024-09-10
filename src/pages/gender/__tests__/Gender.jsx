import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Gender from '../Gender';

describe('Year page tests', () => {
  test('should render Gender', () => {
    render(  
      <BrowserRouter>
        <Gender />
      </BrowserRouter>
    )
    expect(screen.getByText('Top 100 Names in')).toBeInTheDocument();
  });
})