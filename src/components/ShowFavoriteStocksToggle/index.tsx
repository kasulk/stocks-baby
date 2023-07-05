// import Heart from "../../../_ressources/heart.svg";
import IconHeart from "@/components/IconHeart";

type Props = {
  isShowFavoriteStocks: boolean;
  setIsShowFavoriteStocks: React.Dispatch<React.SetStateAction<boolean>>;
};
// function onClick(): void {}

export default function ShowFavoriteStocksToggle({
  isShowFavoriteStocks,
  setIsShowFavoriteStocks,
}: Props) {
  return (
    <button
      // className="transition hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none rounded-md py-2 px-4 m-2 md:mr-4 mr-0"
      className="transition hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none rounded-md py-2 px-4 mx-2 lg:mx-4 mb-3"
      onClick={() => setIsShowFavoriteStocks(!isShowFavoriteStocks)}
    >
      {isShowFavoriteStocks ? (
        "Show All"
      ) : (
        <span className="flex items-center">
          <IconHeart size={20} className="fill-rose-700 mr-1" />
          <span>Favorites</span>
        </span>
      )}
    </button>
  );
}
