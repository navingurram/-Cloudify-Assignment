import React, { useState } from "react";
import SingleSelectDropdown from "./SingleSelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { FaPlus } from "react-icons/fa6";

function Table() {
  const initialData = [{ id: 1, column1: "", column2: [] }];

  const column1Options = ["Option 1", "Option 2", "Option 3"];
  const column2Options = ["Item A", "Item B", "Item C"];

  const [rows, setRows] = useState(initialData);
  const [column2List, setColumn2List] = useState(column2Options);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, column1: "", column2: [] }]);
  };

  const handleColumn1Change = (id, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, column1: value } : row))
    );
  };

  const handleColumn2Change = (id, values) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, column2: values } : row))
    );
  };

  const handleAddToColumn2 = (newItem) => {
    setColumn2List([...column2List, newItem]);
  };

  return (
    <div
      style={{
        backgroundColor: "#ebfffe",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          width: "80%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "50%", height: "80px" }}>Label 1</th>
              <th>Label 2</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={{ height: "130px" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <SingleSelectDropdown
                      options={column1Options.filter(
                        (option) => !rows.some((r) => r.column1 === option)
                      )}
                      selectedOption={row.column1}
                      onSelect={(option) => handleColumn1Change(row.id, option)}
                    />
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <MultiSelectDropdown
                      options={column2List}
                      value={row.column2}
                      onChange={(values) => handleColumn2Change(row.id, values)}
                      onAddNew={handleAddToColumn2}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              padding: "15px 30px",
              cursor: "pointer",
              border: "none",
            }}
            onClick={handleAddRow}
          >
            <FaPlus style={{ paddingRight: "8px" }} />
            Add New Row
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
