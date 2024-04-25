import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MaleFemaleLists from '../MaleFemaleLists';

test('should render MaleFemaleLists', () => {
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
  const params = 2019;
  const changeFavourite = false;
  render(
    <BrowserRouter>
      <MaleFemaleLists names={ namesList } params={ params } changeFavourite= {changeFavourite} />
    </BrowserRouter>
  )
});