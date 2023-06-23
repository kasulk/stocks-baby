import { SortProps } from "../../../types";

export default function SortDropdown({ onSort }: SortProps) {
  return (
    <div className="flex justify-end">
      <form method="post">
        <label htmlFor="sort">Sort: </label>
        <select name="sort" id="sort" className="p-1" onChange={onSort}>
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
        </select>
      </form>
    </div>
  );
}
