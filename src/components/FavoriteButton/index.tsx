import FavoriteButtonIcon from "../FavoriteButtonIcon";

export default function FavoriteButton() {
  let isFavorite: boolean;
  const size = 10;
  const colorName = "rose";
  const colorIntensitiy = "900";
  const color = colorName + "-" + colorIntensitiy;

  isFavorite = false;
  isFavorite = true;

  return (
    <button className="absolute top-5 right-5">
      <svg
        className={`h-${size} w-${size} ${
          isFavorite
            ? `fill-${color}`
            : //   `fill-rose-900`
              `fill-transparent stroke-${color} stroke-3 hover:fill-${color}`
          //   `fill-transparent stroke-rose-900 stroke-2 hover:fill-rose-900`
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </svg>
    </button>
  );
}
