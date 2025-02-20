import { useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

interface Props {
  label: string;
  name: string;
  options: Option[];
  defaultValue?: string;
}

const RadioGroup: React.FC<Props> = ({
  label,
  name,
  options,
  defaultValue = '',
}) => {
  const { field } = useController({ name, defaultValue: defaultValue });
  const { setValue } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    } else {
      field.onChange(options[0].value);
    }
  }, [defaultValue]);

  return (
    <div className='flex flex-col gap-2'>
      <span className='font-medium'>{label}</span>
      <div className='flex flex-col gap-1'>
        {options.map(option => (
          <label key={option.value} className='flex gap-2'>
            <input
              className=' accent-teal-600 cursor-pointer scale-150'
              type='radio'
              {...field}
              value={option.value}
              checked={field.value === option.value}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
