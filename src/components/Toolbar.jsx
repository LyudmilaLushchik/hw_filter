import { v4 as uuidv4 } from "uuid";

export default function Toolbar({ onSelectFilter, filters, selected }) {

  return (
    <div className="toolbar">
      {[...filters].map((filter) => (
        <button
          key={uuidv4()}
          className={filter === selected ? 'active': ''}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
