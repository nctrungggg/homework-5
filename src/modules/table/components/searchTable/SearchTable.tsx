import { useState } from "react";
import "./SearchTable.scss";

interface ISearchTableProps {
  handleSearch: (value: string) => void;
}
const SearchTable = ({ handleSearch }: ISearchTableProps) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);

    handleSearch(value);
  };

  return (
    <>
      <input
        className="input-search"
        type="text"
        name=""
        id=""
        placeholder="Search Name..."
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </>
  );
};

export default SearchTable;
