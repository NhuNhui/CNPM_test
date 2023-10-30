import { useState } from "react";

import "./App.css";
import { Table } from "./table"
import { Modal } from "./Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: "2103",
      name: "HP-1234TX",
      place: "H6-203",
      status: "on",
    },
    {
      id: "2103",
      name: "HP-1234TX",
      place: "H6-203",
      status: "off",
    },
    {
      id: "2103",
      name: "HP-1234TX",
      place: "H6-203",
      status: "on",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)} className="btn">
        Thêm máy in
      </button>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;