import React, { useState } from "react";
import SingleSelectDropdown from "./SingleSelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { FaPlus } from "react-icons/fa";

function Table() {
  const initialData = [{ id: 1, column1: "", column2: [] }];

  const column1Options = ["Option 1", "Option 2", "Option 3"];
  const column2Options = ["Item A", "Item B", "Item C"];

  const [rows, setRows] = useState(initialData);
  const [column2List, setColumn2List] = useState(column2Options);

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      { id: prevRows.length + 1, column1: "", column2: [] },
    ]);
  };

  const handleColumn1Change = (id, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, column1: value } : row))
    );
  };

  const handleColumn2Change = (id, values) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, column2: values } : row))
    );
  };

  const handleAddToColumn2 = (newItem) => {
    if (!column2List.includes(newItem)) {
      setColumn2List((prev) => [...prev, newItem]);
    }
  };

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                width: "50%",
                height: "80px",
                textAlign: "center",
                padding: "10px",
              }}
            >
              Label 1
            </th>
            <th style={{ textAlign: "center", padding: "10px" }}>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ height: "130px", padding: "10px" }}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                <SingleSelectDropdown style={{backgroundColor: 'white'}}
                  options={column1Options.filter(
                    (option) => !rows.some((r) => r.column1 === option)
                  )}
                  selectedOption={row.column1}
                  onSelect={(option) => handleColumn1Change(row.id, option)}
                />
                </div>
              </td>
              <td style={{ padding: "10px" }}>
               <div style={{display: 'flex', justifyContent:'center'}}>
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
          marginTop: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "8px",
            padding: "15px 30px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={handleAddRow}
        >
          <FaPlus />
          Add New Row
        </button>
      </div>
    </div>
  );
}

export default Table;
