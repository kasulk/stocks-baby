// import Heart from "../../../_ressources/heart.svg";
import Heart from "@/components/Heart";

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
      className="transition hover:scale-x-105 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 shadow-md hover:shadow-lg active:shadow-none rounded-md py-2 px-4 m-2 md:mr-4 mr-0"
      onClick={() => setIsShowFavoriteStocks(!isShowFavoriteStocks)}
    >
      {/* {isShowFavoriteStocks ? "Show All" : "❤ Favorites "} */}
      {isShowFavoriteStocks ? (
        "Show All"
      ) : (
        <span className="flex items-center">
          <Heart size={20} className="fill-red-500" />
          Favorites
        </span>
      )}
    </button>
  );
}
