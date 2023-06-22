export default function SortDropdown({}) {
  return (
    <div className="flex justify-end">
      <form method="post">
        <label htmlFor="sort">Sort: </label>
        <select
          name="sort"
          id="sort"
          className="p-1"
          // onchange="if(this.value != 0) { this.form.submit(); }"
        >
          {/* <option value="0">Sort by:</option> */}
          <option value="0" disabled>
            choose a value:
          </option>
          <optgroup label="Ticker:">
            <option value="ticker-ascending">Ticker: ascending</option>
            <option value="ticker-descending">Ticker: descending</option>
          </optgroup>
        </select>
      </form>
    </div>
  );
}
