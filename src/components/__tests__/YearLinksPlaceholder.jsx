import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import YearLinksPlaceHolder from '../YearLinksPlaceHolder';

test('should render YearLinksPlaceHolder for All', () => {
  const gender='all';
  render(  
    <BrowserRouter>
      <YearLinksPlaceHolder gender={gender} />
    </BrowserRouter>
  )
  const yearstest = screen.getByText('2021');
})

test('should render YearLinksPlaceHolder for Male', () => {
  const gender='m';
  render(
    <BrowserRouter>
      <YearLinksPlaceHolder gender={gender} />
    </BrowserRouter>
  );
  const yearstest = screen.getByText('2021');
});

test('should render YearLinksPlaceHolder for Female', () => {
  const gender='f';
  render(
    <BrowserRouter>
      <YearLinksPlaceHolder gender={gender} />
    </BrowserRouter>
  );
  const yearstest = screen.getByText('2021');
})