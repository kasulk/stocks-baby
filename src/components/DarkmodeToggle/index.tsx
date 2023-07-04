type Props = {
  // isDark: {
  //   theme: string;
  // };
  // isDark: boolean;
  // setIsDark: () => React.Dispatch<React.SetStateAction>;
  onClick: () => void;
  theme?: string | null;
};

// export default function DarkmodeToggle({ isDark, setIsDark }: Props) {
export default function DarkmodeToggle({ onClick, theme }: Props) {
  return <button onClick={onClick}>{theme === "dark" ? "☀" : "🌙"}</button>;
}
//
