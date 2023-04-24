/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  deleteTableField,
  getDataTable,
} from "../../modules/table/redux/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import Table from "../../modules/table/components/Table";
import "./TablePage.scss";
import SearchTable from "../../modules/table/components/searchTable/SearchTable";
import { ITableParams } from "../../types/table";
import { debounce } from "lodash";
import SearchComplete from "../../modules/table/components/searchComplete/SearchComplete";

export default function TablePage() {
  const { tableList } = useSelector((state: any) => state.table);
  const [filteredNames, setFilteredNames] = useState(tableList);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    (async function () {
      const resultAction = await dispatch(getDataTable());
      unwrapResult(resultAction);

      setFilteredNames(resultAction.payload);
    })();
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deleteTableField(id));

    const newFilteredNames = filteredNames.filter(
      (table: ITableParams) => table.id !== id
    );

    setFilteredNames(newFilteredNames);
  };

  const handleSearch = debounce((value: string) => {
    const filtered = tableList.filter((table: ITableParams) =>
      table.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredNames(filtered);
  }, 250);

  const handleChangeSelect = (value: string) => {
    const filtered = tableList.filter((table: ITableParams) => {
      if (value === "1") return table.completed === true;

      if (value === "2") return table.completed === false;

      return filteredNames;
    });

    setFilteredNames(filtered);
  };

  return (
    <div className="table-page">
      <div className="table-search">
        <SearchTable handleSearch={handleSearch} />
        <SearchComplete handleChangeSelect={handleChangeSelect} />
      </div>

      <Table onDelete={handleDelete} tableList={filteredNames} />
    </div>
  );
}
