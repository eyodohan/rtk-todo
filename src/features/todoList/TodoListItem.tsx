interface TodoProps {
  completed: boolean;
  text: string;
  onClick: () => any;
}

export default function TodoListItem({ completed, text, onClick }: TodoProps) {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={onClick}
    >
      {text}
    </li>
  );
}
