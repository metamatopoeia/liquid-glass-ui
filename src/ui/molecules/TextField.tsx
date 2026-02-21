import { InputHTMLAttributes, TextareaHTMLAttributes, useState, useId } from 'react';
import s from './TextField.module.css';

interface TextFieldBaseProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  multiline?: boolean;
  minRows?: number;
  margin?: 'none' | 'normal';
  className?: string;
}

type TextFieldInputProps = TextFieldBaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

type TextFieldTextareaProps = TextFieldBaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>;

type TextFieldProps = TextFieldInputProps | TextFieldTextareaProps;

export default function TextField({
  label,
  helperText,
  error = false,
  fullWidth = false,
  required = false,
  multiline = false,
  minRows = 3,
  margin = 'none',
  className = '',
  ...rest
}: TextFieldProps) {
  const autoId = useId();
  const inputId = (rest as InputHTMLAttributes<HTMLInputElement>).id || autoId;
  const [focused, setFocused] = useState(false);

  const wrapperClasses = [
    s.wrapper,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperStyle = {
    ...(fullWidth ? { width: '100%' } : {}),
    ...(margin === 'none' ? { marginTop: 0, marginBottom: 0 } : {}),
  };

  const labelClasses = [
    error ? s.labelError : focused ? s.labelFocused : s.label,
  ].join(' ');

  const inputClasses = [
    multiline ? s.textarea : s.input,
    error ? (multiline ? s.textareaError : s.inputError) : '',
  ]
    .filter(Boolean)
    .join(' ');

  const helperClasses = error ? s.helperError : s.helper;

  const sharedProps = {
    id: inputId,
    className: inputClasses,
    required,
    onFocus: (e: React.FocusEvent) => {
      setFocused(true);
      const handler = (rest as InputHTMLAttributes<HTMLInputElement>).onFocus;
      if (handler) (handler as (e: React.FocusEvent) => void)(e);
    },
    onBlur: (e: React.FocusEvent) => {
      setFocused(false);
      const handler = (rest as InputHTMLAttributes<HTMLInputElement>).onBlur;
      if (handler) (handler as (e: React.FocusEvent) => void)(e);
    },
  };

  return (
    <div className={wrapperClasses} style={wrapperStyle}>
      {label && (
        <label className={labelClasses} htmlFor={inputId}>
          {label}
          {required && ' *'}
        </label>
      )}
      {multiline ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          {...sharedProps}
          rows={minRows}
        />
      ) : (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          {...sharedProps}
        />
      )}
      {helperText && <p className={helperClasses}>{helperText}</p>}
    </div>
  );
}
