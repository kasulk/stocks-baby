export default function SortDropdown({ onSubmit }) {
  return (
    <div className="flex justify-end">
      <form method="post">
        <label htmlFor="sort">Sort: </label>
        <select name="sort" id="sort" className="p-1" onChange={onSubmit}>
          {/* <option value="0">Sort by:</option> */}
          <option value="0" disabled>
            choose a value:
          </option>
          <optgroup label="Ticker:">
            <option value="Symbol-ascending">Ticker: ascending</option>
            <option value="Symbol-descending">Ticker: descending</option>
          </optgroup>
        </select>
      </form>
    </div>
  );
}
