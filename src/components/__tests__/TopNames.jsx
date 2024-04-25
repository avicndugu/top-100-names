import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TopNames from '../TopNames';

test('should render TopNames Girls top 10', () => {
  const girls = [
    {
      id: 1,
      pos: 1,
      name: 'name',
      count: 20,
      gender: 'f',
      favourite: false,
    }
  ];
  const top10girls = [
    {
      id: 1,
      pos: 1,
      name: 'name',
      count: 20,
      gender: 'f',
      favourite: false,
    }
  ];
  const top100girls = [
    {
      id: 72,
      pos: 70,
      name: 'name',
      count: 700,
      gender: 'f',
      favourite: false,
    }
  ];
  const seeAllGirls = false;
  const changeFavourite = false;
  render(
      <TopNames
        names={girls}
        top10={top10girls}
        top100={top100girls}
        gender="f"
        seeall={seeAllGirls}
        changeFavourite={changeFavourite}
      />
  )
  const testtop10 = screen.getByText('1. name');
});

test('should render TopNames Girls top 100', () => {
  const girls = [
    {
      id: 11,
      pos: 20,
      name: 'name',
      count: 20,
      gender: 'f',
      favourite: false,
    }
  ];
  const top10girls = [
    {
      id: 1,
      pos: 1,
      name: 'name',
      count: 20,
      gender: 'f',
      favourite: false,
    }
  ];
  const top100girls = [
    {
      id: 72,
      pos: 70,
      name: 'name',
      count: 700,
      gender: 'f',
      favourite: false,
    }
  ];
  const seeAllGirls = true;
  const changeFavourite = false;
  render(
      <TopNames
        names={girls}
        top10={top10girls}
        top100={top100girls}
        gender="f"
        seeall={seeAllGirls}
        changeFavourite={changeFavourite}
      />
  )
  const testtop100 = screen.getByText('70. name');

});

test('should render TopNames Boys top 10', () => {
  const boys = [
    {
      id: 12,
      pos: 2,
      name: 'name',
      count: 20,
      gender: 'f',
      favourite: false,
    }
  ];
  const top10boys = [
    {
      id: 62,
      pos: 3,
      name: 'name',
      count: 900,
      gender: 'f',
      favourite: false,
    }
  ];
  const top100boys = [
    {
      id: 1,
      pos: 1,
      name: 'name',
      count: 75,
      gender: 'm',
      favourite: false,
    }
  ];
  const seeAllBoys = false;
  const changeFavourite = false;
  render(
      <TopNames
        names={boys}
        top10={top10boys}
        top100={top100boys}
        gender="m"
        seeall={seeAllBoys}
        changeFavourite={changeFavourite}
      />
  )
  const testtop10 = screen.getByText('3. name');
});

test('should render TopNames Boys top 100', () => {
  const boys = [
    {
      id: 1,
      pos: 1,
      name: 'name',
      count: 20,
      gender: 'f',
      favourite: false,
    }
  ];
  const top10boys = [
    {
      id: 2,
      pos: 3,
      name: 'name',
      count: 10,
      gender: 'f',
      favourite: false,
    }
  ];
  const top100boys = [
    {
      id: 235,
      pos: 93,
      name: 'name',
      count: 75,
      gender: 'm',
      favourite: false,
    }
  ];
  const seeAllBoys = true;
  const changeFavourite = false;
  render(
      <TopNames
        names={boys}
        top10={top10boys}
        top100={top100boys}
        gender="m"
        seeall={seeAllBoys}
        changeFavourite={changeFavourite}
      />
  )
  const testtop10 = screen.getByText('93. name');
});