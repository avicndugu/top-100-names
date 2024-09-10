import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home page tests', () => {
  test('Should render Home', () => {
    render(  
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Top 100 Baby Names in loading...')).toBeInTheDocument();
    expect(screen.getByText('Top 100 Baby Boys Names in loading...')).toBeInTheDocument();
    expect(screen.getByText('Top 100 Baby Girls Names in loading...')).toBeInTheDocument();
  });

});
