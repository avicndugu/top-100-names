import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo';

test('should render todo', () => {
  render(<Todo />)
  const todoElement = screen.getByTestId('todo-x');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Hello');
})
