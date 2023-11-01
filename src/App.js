import { useState } from "react";

import "./App.css";
import { Table } from "./table"
import { Modal } from "./Modal";
import { SearchBar } from "./Search/SearchBar";
import { SearchResultsList } from "./Search/SearchResultsList";
//import { Success } from "./Sucess";

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
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <button onClick={() => {
        setModalOpen(true);
        <div className="success">
          Thêm máy in thành công
        </div>
      }} 
        className="btn">
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