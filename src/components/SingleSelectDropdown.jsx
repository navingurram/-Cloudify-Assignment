import React, { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

const SingleSelectDropdown = ({ options, selectedOption, onSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelectOption = (option) => {
    onSelect(option);
    setDropdownOpen(false);
  };

  const handleRemoveOption = (e) => {
    e.stopPropagation();
    onSelect(null); 
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
          alignItems: "center",
          gap: "5px",
        }}
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#d7d9d9",
              borderRadius: "12px",
              padding: "5px 10px",
              border: "1px solid #ccc",
            }}
          >
            <span style={{ marginRight: "8px" }}>{selectedOption}</span>
            <FaTimes
              style={{
                cursor: "pointer",
                fontSize: "12px",
                color: "#333",
              }}
              onClick={handleRemoveOption}
            />
          </div>
        ) : (
          "Select an option"
        )}

        <div
          style={{
            marginLeft: "auto", 
            transition: "transform 0.3s ease",
            transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <FaChevronDown />
        </div>
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
                backgroundColor: option === selectedOption ? "#e6f7ff" : "white",
                color: option === selectedOption ? "#0056b3" : "#333",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleSelectDropdown;
