type Props = {
  isDark: {
    theme: string;
  };
  // setIsDark: () => React.Dispatch<React.SetStateAction>;
  onClick: () => void;
};

// export default function DarkmodeToggle({ isDark, setIsDark }: Props) {
export default function DarkmodeToggle({ onClick, isDark }: Props) {
  return (
    // <button onClick={()=> setIsDark({true})}/>test</button>
    <button onClick={onClick}>🌙</button>
  );
}
//
