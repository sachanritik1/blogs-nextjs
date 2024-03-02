interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
