type Props = {
  onClick: () => void;
  theme?: string | null;
};

export default function DarkmodeToggle({ onClick, theme }: Props) {
  return (
    <button
      // className="w-10 h-10 transition rounded-full hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none m-2 md:mr-4 mr-0"
      className="w-10 h-10 transition rounded-full hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none ml-2"
      onClick={onClick}
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}
//
