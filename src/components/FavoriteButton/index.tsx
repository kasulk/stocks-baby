import Heart from "../Heart";

type Props = {
  _id: string;
  currentUser: string;
  Favorites?: string[];
  onToggleFavorite: (id: string, user: string) => void;
};

export default function FavoriteButton({
  _id,
  currentUser,
  Favorites,
  onToggleFavorite,
}: Props) {
  //
  const isFavorite = Favorites?.includes(currentUser);

  return (
    <Heart
      size={32}
      className={`absolute top-4 right-4 cursor-pointer transition active:fill-slate-100 active:stroke-slate-100 active:transition-none hover:scale-125  ${
        isFavorite
          ? `fill-rose-900 scale-110 hover:fill-slate-500`
          : `fill-transparent stroke-slate-300 stroke-2 scale-90 hover:fill-rose-900 hover:stroke-none`
      }`}
      onClick={() => onToggleFavorite(_id, currentUser)}
    />
  );
}
