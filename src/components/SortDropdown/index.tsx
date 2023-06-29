type Props = {
  // onSort: (event: React.FormEvent) => void;
  onSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SortDropdown({ onSort }: Props) {
  return (
    <div className="transition hover:scale-x-105">
      <form method="post">
        <label htmlFor="sort">Sort: </label>
        <select
          name="sort"
          id="sort"
          className="transition shadow-md hover:shadow-lg active:shadow-none py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-300"
          onChange={onSort}
        >
          <option className="italic" value="0" disabled>
            choose a value:
          </option>
          <optgroup label="Ticker:">
            <option value="Symbol-ascending">Ticker: ascending</option>
            <option value="Symbol-descending">Ticker: descending</option>
          </optgroup>
          <optgroup label="Company Name:">
            <option value="Name-ascending">Name: ascending</option>
            <option value="Name-descending">Name: descending</option>
          </optgroup>
          <optgroup label="DividendYield">
            <option value="DividendYield-ascending">Div%: ascending</option>
            <option value="DividendYield-descending">Div%: descending</option>
          </optgroup>
          <optgroup label="52Week Bruchwert%">
            <option value="Bruchwert52Week-ascending">
              Bruchwert%: ascending
            </option>
            <option value="Bruchwert52Week-descending">
              Bruchwert%: descending
            </option>
          </optgroup>
        </select>
      </form>
    </div>
  );
}
