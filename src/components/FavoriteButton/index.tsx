type Props = {
  _id: string;
  onToggleFavorite: (id: string, user: string) => void;
  Favorites: string[];
};

export default function FavoriteButton({
  _id,
  onToggleFavorite,
  Favorites,
}: Props) {
  const size = 32;
  const currentUser = "icke";
  const isFavorite = Favorites.includes(currentUser);

  return (
    <svg
      className={`absolute top-4 right-4 cursor-pointer transition active:fill-slate-100 active:stroke-slate-100 active:transition-none hover:scale-125  ${
        isFavorite
          ? `fill-rose-900 scale-110 hover:fill-slate-500`
          : `fill-transparent stroke-slate-300 stroke-2 scale-90 hover:fill-rose-900 hover:stroke-none`
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      onClick={() => onToggleFavorite(_id, currentUser)}
    >
      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
    </svg>
  );
}
