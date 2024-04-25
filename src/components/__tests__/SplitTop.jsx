import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SplitTop from '../SplitTop';

test('should render SplitTop', () => {
  const namesList = [
    {
      id: 1,
      pos: 1,
      name: 'name',
      count: 20,
      gender: 'f',
      favourite: false,
    }
  ];
  const gender = 'all';
  render(
    <BrowserRouter>
      <SplitTop names={namesList} gender={gender} />
    </BrowserRouter>
  )
});