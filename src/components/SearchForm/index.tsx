type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm({ onChange }: Props) {
  return (
    <form method="POST" className="relative">
      {/* <div className="absolute top-4 left-4 z-10">🔍</div> */}
      <label htmlFor="search" className="absolute top-4 left-4 z-10">
        🔍
      </label>
      <input
        id="search"
        className="transition hover:scale-x-105 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 focus:border-none focus:outline-slate-300 shadow-md hover:shadow-lg active:shadow-none rounded-md py-2 px-4 pl-12 m-2 md:mr-4 mr-0"
        type="text"
        onChange={(event) => onChange(event)}
        placeholder="company name / symbol"
      />
    </form>
  );
}
