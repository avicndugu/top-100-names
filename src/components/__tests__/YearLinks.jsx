import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import YearLinks from '../YearLinks';

test('should render YearLinks', () => {
  const currentpageyears = [2021, 2020, 2019, 2018];
  render(
    <BrowserRouter>
      <YearLinks gender="all" yearslist={ currentpageyears }/>
    </BrowserRouter>
  )
});


