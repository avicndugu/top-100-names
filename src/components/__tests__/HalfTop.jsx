import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HalfTop from '../HalfTop';

test('should render HalfTop(1-25 names only)', () => {
  const first25 = [{
    name: "name",
    pos: 25,
    id: 25,
  }];
  const first50 = [{
    name: "name",
    pos: 50,
    id: 50,
  }];
  const gender="all";
  const even=false;
  const seeAll=false;
  const changeFavourite=false;

  render(
    <HalfTop 
      firstQuarter={first25}
      firstHalf={first50}
      gender={gender}
      even={even}
      seeall={seeAll}
      changeFavourite={changeFavourite}
    />
  )
  const loadingNames = screen.getByText('25. name');
})

test('should render HalfTop(26-50 names only)', () => {
  const second25 =[{
    name: "name",
    pos: 36,
    id: 36,
  }];
  const first50 = [{
    name: "name",
    pos: 50,
    id: 50,
  }];
  const gender="all";
  const even=true;
  const seeAll=false;
  const changeFavourite=false;

  render(
    <HalfTop
      secondQuarter={second25}
      firstHalf={first50}
      gender={gender}
      even={even}
      seeall={seeAll}
      changeFavourite={changeFavourite}
    />
  )
  const loadingNames = screen.getByText('36. name');
})


test('should render HalfTop 1-50', () => {
  const second25 =[{
    name: "name",
    pos: 25,
    id: 25,
  }];
  const first50 = [{
    name: "name",
    pos: 45,
    id: 45,
  }];
  const gender="all";
  const even=false;
  const seeAll=true;
  const changeFavourite=false;

  render(
    <HalfTop
      secondQuarter={second25}
      firstHalf={first50}
      gender={gender}
      even={even}
      seeall={seeAll}
      changeFavourite={changeFavourite}
    />
  )
  const loadingNames = screen.getByText('45. name');
})


test('should render HalfTop 51-100', () => {
  const second25 =[{
    name: "name",
    pos: 25,
    id: 25,
  }];
  const second50 = [{
    name: "name",
    pos: 100,
    id: 100,
  }];
  const gender="all";
  const even=true;
  const seeAll=true;
  const changeFavourite=false;

  render(
    <HalfTop
      secondQuarter={second25}
      secondHalf={second50}
      gender={gender}
      even={even}
      seeall={seeAll}
      changeFavourite={changeFavourite}
    />
  )
  const loadingNames = screen.getByText('100. name');
})