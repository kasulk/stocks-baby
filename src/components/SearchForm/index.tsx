// import React from "react";
import IconMaginifiyingGlass from "../IconMagnifiyingGlass";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

export default function SearchForm({ onChange, searchQuery }: Props) {
  return (
    <form
      method="POST"
      className="flex items-center transition hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 focus:outline-accent-2 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none rounded-md py-1 px-2 sm:py-2 sm:px-4 mx-2 lg:mx-4 mb-3"
    >
      <IconMaginifiyingGlass
        className="fill-customcontentcolor mr-2 h-3 sm:h-auto"
        size={20}
      />
      <input
        id="search"
        className="px-4 outline-none bg-accent-1 text-xs sm:text-base"
        // type="text"
        type="search"
        onChange={(event) => onChange(event)}
        value={searchQuery}
        placeholder="company name / symbol"
      />
    </form>
  );
}
