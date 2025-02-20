import { useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';

interface Props {
  className?: string;
  placeholder?: string;
  type?: string;
  rules?: Record<string, any>;
  name: string;
  defaultValue?: string;
  autoFocus?: boolean;
}

const Input: React.FC<Props> = ({
  className,
  placeholder,
  rules,
  name,
  type = 'text',
  defaultValue = '',
  autoFocus = false,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules: rules,
    defaultValue: defaultValue,
  });

  const { setValue } = useFormContext();

  const trimValue = () => {
    field.value && setValue(name, field.value.replace(/\s+/g, ' ').trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      trimValue();
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue]);

  return (
    <div>
      <input
        className={`rounded-lg w-full py-0.5 px-2 border-2 outline-none transition-colors ${
          error
            ? ' border-red-400 focus:border-red-400 bg-red-400/15'
            : 'border-transparent bg-gray-100'
        } ${className}`}
        type={type}
        placeholder={placeholder}
        {...field}
        onBlur={trimValue}
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
      />
      {error && <span className='text-red-400 text-sm'>{error.message}</span>}
    </div>
  );
};

export default Input;
