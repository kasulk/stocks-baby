import IconMaginifiyingGlass from "../IconMagnifiyingGlass";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm({ onChange }: Props) {
  return (
    <form
      method="POST"
      className="flex items-center transition hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 focus:outline-accent-2 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none rounded-md py-2 px-4 m-2 md:mr-4 mr-0"
    >
      <IconMaginifiyingGlass
        className="fill-customcontentcolor mr-2"
        size={20}
      />
      <input
        id="search"
        className="px-4 outline-none bg-accent-1"
        // type="text"
        type="search"
        onChange={(event) => onChange(event)}
        placeholder="company name / symbol"
      />
      {/* <input
        className="border border-black h-8 w-8 flex justify-center items-center rounded-full"
        type="reset"
        value="x"
        alt="Clear the search form"
      /> */}
    </form>
  );
}
