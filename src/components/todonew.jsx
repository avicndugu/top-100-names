import React from 'react';

function todonew({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h6>{title}</h6>;
  const text = completed ? <del>{h1}</del> : h1;
  return (
      <div data-testid={`todo-${id}`}>{text}</div>
  )
}
export default todonew;