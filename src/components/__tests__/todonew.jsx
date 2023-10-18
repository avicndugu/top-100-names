import { render, screen, cleanup } from '@testing-library/react';
import TodoNew from '../todonew';

test('should render non-completed Todonew', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false };
  render(<TodoNew todo={todo} />)
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');
})

test('should render completed Todonew', () => {
  const todo = { id: 2, title: 'wash pillow', completed: true };
  render(<TodoNew todo={todo} />)
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash pillow');
})