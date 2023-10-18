import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TodoNew from '../todonew';

afterEach(() => {
  cleanup();
});

test('should render non-completed Todonew', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false, };
  render(<TodoNew todo={todo} />)
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');
  expect(todoElement).not.toContainHTML('del');
})

test('should render completed Todonew', () => {
  const todo = { id: 2, title: 'wash pillow', completed: true, };
  render(<TodoNew todo={todo} />)
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash pillow');
  expect(todoElement).toContainHTML('del');

})

// Test using snapshots
test('should render completed Todonew', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false, };
  const tree = renderer.create(<TodoNew todo={todo} />).toJSON();
  console.log(tree);
  expect('tree').toMatchSnapshot();
})
