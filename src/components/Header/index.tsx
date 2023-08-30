import DarkmodeToggle from "../DarkmodeToggle";
import LoginButton from "../LoginButton";
import SearchForm from "../SearchForm";
import ShowFavoriteStocksToggle from "../ShowFavoriteStocksToggle";
import SortDropdown from "../SortDropdown";

type props = {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleThemeSwitch: () => void;
  theme?: string | null;
  searchQuery: string;
  currentUser?: string | null;
  isShowFavoriteStocks: boolean;
  setIsShowFavoriteStocks: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  handleSearch,
  handleSort,
  handleThemeSwitch,
  theme,
  searchQuery,
  currentUser,
  isShowFavoriteStocks,
  setIsShowFavoriteStocks,
}: props) {
  return (
    <header className="fixed top-0 z-10 flex flex-col w-full bg-accent-4 bg-opacity-90 backdrop-blur-md p-4 pb-2 ">
      <div className="flex flex-wrap justify-center sm:justify-between items-center">
        <h1 className="font-serif font-black italic text-2xl sm:text-5xl md:text-6xl text-customcontentcolor mr-4">
          Ursula
        </h1>
        <div className="flex items-center m-2 ml-4">
          <LoginButton />
          <DarkmodeToggle
            onClick={() => {
              handleThemeSwitch();
            }}
            theme={theme}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse items-center sm:flex-row sm:flex-wrap-reverse sm:items-center sm:justify-center mt-2">
        <SortDropdown onSort={handleSort} />
        <SearchForm onChange={handleSearch} searchQuery={searchQuery} />
        {currentUser && (
          <ShowFavoriteStocksToggle
            isShowFavoriteStocks={isShowFavoriteStocks}
            setIsShowFavoriteStocks={setIsShowFavoriteStocks}
          />
        )}
      </div>
    </header>
  );
}
