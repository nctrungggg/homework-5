import { useState } from "react";
import "./SearchComplete.scss";

interface ISearchCompletedTableProps {
  handleChangeSelect: (value: string) => void;
}
const SearchComplete = ({ handleChangeSelect }: ISearchCompletedTableProps) => {
  const [value, setValue] = useState<string>("0");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setValue(value);
    handleChangeSelect(value);
  };

  return (
    <div className="select">
      <select onChange={(e) => handleSelect(e)} value={value}>
        <option value="0">All</option>
        <option value="1">Completed</option>
        <option value="2">Rejected</option>
      </select>
    </div>
  );
};

export default SearchComplete;
