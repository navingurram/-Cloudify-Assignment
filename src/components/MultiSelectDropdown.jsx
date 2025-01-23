import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const MultiSelectDropdown = () => {
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const addOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions((prev) => [...prev, newOption]);
      setNewOption("");
    }
  };

  const removeSelectedOption = (option) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  return (
    <div style={{ width: "300px", margin: "20px", position: "relative" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          cursor: "pointer",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "5px",
        }}
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? (
          selectedOptions.map((option) => (
            <div
              key={option}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e6f7ff",
                borderRadius: "12px",
                padding: "5px 10px",
                border: "1px solid #ccc",
              }}
            >
              <span style={{ marginRight: "8px" }}>{option}</span>
              <FaTimes
                style={{
                  cursor: "pointer",
                  fontSize: "12px",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelectedOption(option);
                }}
              />
            </div>
          ))
        ) : (
          "Select options"
        )}
      </div>

      {dropdownOpen && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginTop: "5px",
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor: selectedOptions.includes(option)
                  ? "#e6f7ff"
                  : "white",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => toggleOption(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
                style={{ marginRight: "8px" }}
              />
              {option}
            </div>
          ))}

          <div
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
            }}
          >
            <input
              type="text"
              placeholder="Add new item"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              style={{
                flex: 1,
                padding: "5px",
                marginRight: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <button
              onClick={addOption}
              style={{
                padding: "10px 10px",
                border: "none",
                backgroundColor: "black",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <FaPlus style={{ paddingRight: "7px" }} />
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
