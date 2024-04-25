import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import YearLinksPagination from '../YearLinksPagination';

test('should render YearLinksPagination', () => {
  const numberofpages = 5;
  const pageNumber = 3;
  const setPageNumber = 4;
  render(
    <YearLinksPagination
      numberofpages={ numberofpages }
      pageNumber={ pageNumber }
      setPageNumber={ setPageNumber }
    />
  )
})

test('should render not Render YearLinksPagination', () => {
  const numberofpages = 0;
  const pageNumber = 0;
  const setPageNumber = 0;
  render(
    <YearLinksPagination
      numberofpages={ numberofpages }
      pageNumber={ pageNumber }
      setPageNumber={ setPageNumber }
    />
  )
})