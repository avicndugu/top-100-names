import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SplitTable from '../SplitTable';

test('should render SplitTable', () => {
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
  const changeFavourite = false;
  render(
    <BrowserRouter>
      <SplitTable names={namesList} changeFavourite={changeFavourite} />
    </BrowserRouter>
  )
});