// import FavoriteButtonIcon from "../FavoriteButtonIcon";

// type Props = StockType & {
type Props = {
  _id: string;
  // onToggleFavorite: (event: React.MouseEvent, id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export default function FavoriteButton({ _id, onToggleFavorite }: Props) {
  let isFavorite: boolean;
  // const size = 10;
  const size = 32;
  const colorName = "rose";
  const colorIntensitiy = "900";
  const color = colorName + "-" + colorIntensitiy;

  isFavorite = false;
  // isFavorite = true;

  // console.log(onToggleFavorite);
  // console.log(_id);

  return (
    <>
      <svg
        className={`absolute top-4 right-4 cursor-pointer ${
          isFavorite
            ? `fill-rose-900`
            : `fill-transparent stroke-rose-900 stroke-3 hover:fill-rose-900 focus:fill-slate-100`
        }`}
        // className={`absolute top-4 right-4 cursor-pointer ${
        //   isFavorite
        //     ? `fill-${color}`
        //     : `fill-transparent stroke-${color} stroke-3 hover:fill-${color}`
        // }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        onClick={() => onToggleFavorite(_id)}
        // onClick={() => console.log("geil!")}
      >
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </svg>
      {/* <button
        className="absolute top-4 right-4 cursor-pointer"
        // onClick={() => onToggleFavorite(event, _id)}
        onClick={() => onToggleFavorite(_id)}
        // onClick={() => console.log(_id)}  // ! funzt
      >
        {/* ❤ */}
      {/*
        <svg
          // className={`h-${size} w-${size} ${
          className={`${
            isFavorite
              ? `fill-${color}`
              : `fill-transparent stroke-${color} stroke-3 hover:fill-${color}`
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          // viewBox="0 0 100 100"
        >
          <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
        </svg>
      </button> */}
    </>
  );
}
