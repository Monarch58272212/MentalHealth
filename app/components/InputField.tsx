import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export type InputFieldHandle = {
  focus: () => void;
  reset: () => void;
};

interface InputFieldProps {
  label: string;
}

const InputField = forwardRef<InputFieldHandle, InputFieldProps>(
  ({ label }, ref) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      reset: () => setValue(''),
    }));

    return (
      <div style={{ marginBottom: '1rem' }}>
        <label>{label}: </label>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Enter ${label}`}
        />
      </div>
    );
  },
);

export default InputField;
