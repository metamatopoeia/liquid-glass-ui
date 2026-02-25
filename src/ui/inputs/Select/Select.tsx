import * as RadixSelect from '@radix-ui/react-select';
import { ReactNode, useId } from 'react';
import s from './Select.module.css';
import tfStyles from '../TextField/TextField.module.css';

interface SelectOption {
  value: string;
  label: ReactNode;
  placeholder?: boolean;
}

interface SelectProps {
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  margin?: 'none' | 'normal';
  className?: string;
}

export default function Select({
  label,
  value,
  onValueChange,
  options,
  placeholder = 'Select…',
  required = false,
  fullWidth = false,
  margin = 'none',
  className = '',
}: SelectProps) {
  const autoId = useId();

  const wrapperClasses = [tfStyles.wrapper, className].filter(Boolean).join(' ');
  const wrapperStyle = {
    ...(fullWidth ? { width: '100%' } : {}),
    ...(margin === 'none' ? { marginTop: 0, marginBottom: 0 } : {}),
  };

  return (
    <div className={wrapperClasses} style={wrapperStyle}>
      {label && (
        <label className={tfStyles.label} htmlFor={autoId}>
          {label}
          {required && ' *'}
        </label>
      )}
      <RadixSelect.Root value={value} onValueChange={onValueChange}>
        <RadixSelect.Trigger className={s.trigger} id={autoId}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className={s.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className={s.content} position="popper" sideOffset={4}>
            <RadixSelect.Viewport className={s.viewport}>
              {options.map((opt) => (
                <RadixSelect.Item
                  key={opt.value}
                  value={opt.value}
                  className={opt.placeholder ? s.itemPlaceholder : s.item}
                >
                  <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}
