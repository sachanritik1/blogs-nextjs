interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  reference: React.RefObject<HTMLInputElement>;
}

export default function Input({
  label,
  type,
  placeholder,
  reference,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        ref={reference}
        placeholder={placeholder}
        className="p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
