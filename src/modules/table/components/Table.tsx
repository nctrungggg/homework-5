import { useState } from "react";
import ModalConfirm from "../../../components/modalConfirm/ModalConfirm";
import { ITableParams } from "../../../types/table";
import "./Table.scss";

interface ITableProps {
  tableList: ITableParams[];
  onDelete: (id: number) => void;
}

function Table({ tableList, onDelete }: ITableProps) {
  const [showModal, setShowModal] = useState(false);
  const [id, setID] = useState<number>();

  const handleDelete = (id: number) => {
    setShowModal(true);

    setID(id);
  };

  return (
    <>
      <table className="table-users">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Complete</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tableList?.map((table: ITableParams) => (
            <tr key={table.id}>
              <td>{table.id}</td>
              <td>{table.title}</td>
              <td>
                {" "}
                {table.completed ? (
                  <div className="completed">Completed</div>
                ) : (
                  <div className="rejected">Rejected</div>
                )}
              </td>
              <td
                className="button-delete"
                onClick={() => handleDelete(table.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalConfirm
        onDelete={onDelete}
        showModal={showModal}
        setShowModal={setShowModal}
        id={id}
      />
    </>
  );
}

export default Table;
