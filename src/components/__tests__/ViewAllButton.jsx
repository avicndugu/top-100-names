import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ViewAllButton from '../ViewAllButton';

test('should render ViewAllButton', () => {
  const setSeeAll = false;
  const viewAllButton = true;
  const setViewAllButton = true;
  render(
    <ViewAllButton
      setSeeAll={setSeeAll}
      viewAllButton={viewAllButton}
      setViewAllButton={setViewAllButton}
    />
  )
})

test('should render not Render ViewAllButton', () => {
  const setSeeAll = true;
  const viewAllButton = false;
  const setViewAllButton = true;
  render(
    <ViewAllButton
      setSeeAll={setSeeAll}
      viewAllButton={viewAllButton}
      setViewAllButton={setViewAllButton}
    />
  )
})