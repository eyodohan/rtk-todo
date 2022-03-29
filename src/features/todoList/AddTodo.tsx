import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export default function AddTodo(): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}
