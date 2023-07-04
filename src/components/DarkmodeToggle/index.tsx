type Props = {
  onClick: () => void;
  theme?: string | null;
};

export default function DarkmodeToggle({ onClick, theme }: Props) {
  return <button onClick={onClick}>{theme === "dark" ? "☀" : "🌙"}</button>;
}
//
