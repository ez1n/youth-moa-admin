import { useRef, useEffect } from 'react';

interface TextAreaProps {
  placeholder?: string;
  maxLength?: number;
  value: string;
  onChange: (text: string) => void;
}

export const TextArea = (props: TextAreaProps) => {
  const { placeholder = '', maxLength = 1000, value, onChange } = props;
  return (
    <div className="w-full">
      <textarea
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[100px] p-3 border rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-right text-sm text-gray-500 mt-1">
        {value.length} / {maxLength}
      </p>
    </div>
  );
};
