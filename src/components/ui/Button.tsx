interface ButtonProps {
  name: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

export default function Button({ type, name, onClick }: ButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        type={type || "button"}
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {name}
      </button>
    </div>
  );
}
