import { useState, FormEvent } from 'react';
import Button from '../atoms/Button';
import s from './CommentInput.module.css';

interface CommentInputProps {
  onSubmit: (text: string) => void;
  disabled?: boolean;
}

export default function CommentInput({ onSubmit, disabled }: CommentInputProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setText('');
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={s.field}
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={300}
        disabled={disabled}
        aria-label="Comment text"
      />
      <Button
        type="submit"
        variant="text"
        size="small"
        disabled={disabled || !text.trim()}
      >
        Post
      </Button>
    </form>
  );
}
