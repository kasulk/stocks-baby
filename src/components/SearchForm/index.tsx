import IconMaginifiyingGlass from "../IconMagnifiyingGlass";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm({ onChange }: Props) {
  return (
    <form
      method="POST"
      className="flex items-center transition hover:scale-x-105 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 focus:outline-slate-300 shadow-md hover:shadow-lg active:shadow-none rounded-md py-2 px-4 m-2 md:mr-4 mr-0"
    >
      <IconMaginifiyingGlass className="fill-slate-500 mr-2" size={20} />
      <input
        id="search"
        className="px-4 outline-none bg-slate-200"
        type="text"
        onChange={(event) => onChange(event)}
        placeholder="company name / symbol"
      />
    </form>
  );
}
