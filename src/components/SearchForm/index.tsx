type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm({ onChange }: Props) {
  return (
    <form method="POST">
      <input
        id="search"
        className="border"
        // value={``}
        type="text"
        onChange={(event) => onChange(event)}
        placeholder="What are you looking for?"
      />
      <button type="submit">Yalla!</button>
    </form>
  );
}
