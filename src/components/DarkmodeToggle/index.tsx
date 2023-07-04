type Props = {
  // isDark: {
  //   theme: string;
  // };
  // isDark: boolean;
  // setIsDark: () => React.Dispatch<React.SetStateAction>;
  onClick: () => void;
  themeIcon: string;
};

// export default function DarkmodeToggle({ isDark, setIsDark }: Props) {
export default function DarkmodeToggle({ onClick, themeIcon }: Props) {
  return (
    // <button onClick={()=> setIsDark({true})}/>test</button>
    <button onClick={onClick}>{themeIcon}</button>
  );
}
//
