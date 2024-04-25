import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import PlaceHolder1to10 from '../PlaceHolder1to10';

test('should render PlaceHolder1to10', () => {
  render(<PlaceHolder1to10 />)
  const loadingNames = screen.getAllByText('Loading ...');
})