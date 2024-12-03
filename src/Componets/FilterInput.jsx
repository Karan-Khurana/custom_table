import React, { useEffect, useState } from "react";

const FilterInput = ({ setFilters, field, fieldName, type = "text" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    const isNumericFilter = /^(=|!=|>|<|>=|<=)/.test(filter);

    if (filter !== "") {
      if (isNumericFilter && value !== "") {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
          setFilters({
            field: field,
            filter: filter,
            type: "numeric",
            value: numericValue,
          });
        }
      } else if (["^.+$", "^$"].includes(filter)) {
        setFilters({
          field: field,
          value: filter,
        });
      } else if (value !== "") {
        setFilters({
          field: field,
          value: filter.replace("{value}", value),
        });
      }
    }
    if (["^.+$", "^$"].includes(filter)) setShowInput(false);
    else setShowInput(true);
  }, [value, filter]);

  return (
    <sapn
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
      style={{
        cursor: "pointer",
        position: "relative",
        marginLeft: "10px", 
        transition: "transform 0.5s ease",
      }}
    >
      {/* &#9776; */}
      <svg
        fill="#fff"
        height="12px"
        width="12px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xml:space="preserve"
        style={{
          transition: "transform 0.3s ease",
        }}
      >
        <g>
          <g>
            <polygon points="0,0 0,128 201.143,329.143 201.143,512 310.857,475.429 310.857,329.143 512,128 512,0 		" />
          </g>
        </g>
      </svg>
      {isOpen && (
        <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 999,
          transition: "all 0.3s ease",
        }}
          onClick={() => setIsOpen(false)}
        >
          <div>
            <div
              style={{
                marginTop: "20px",
                width: "max-content",
                background: "#333",
                color: "#fff",
                margin: 10,
                padding: "15px 20px",
                display: "flex",
                gap: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                alignItems: "center",
                justifyContent: "space-between",
                animation: "fadeIn 0.3s ease-in-out",
                justifySelf: "end",
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {fieldName}
              <select
                name="filters"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setValue("");
                }}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                <option value="">Select filter</option>
                {type != "number" ? (
                  <>
                    <option value=".*{value}.*">Contains</option>
                    <option value="^(?!.*{value}).*$">Does not contain</option>
                    <option value="^{value}$">Equals</option>
                    <option value="^(?!{value}$).*$">Does not equal</option>
                    <option value="^{value}.*$">Starts with</option>
                    <option value="^.*{value}$">Ends with</option>
                  </>
                ) : (
                  <>
                    <option value="=">Equals</option>
                    <option value="!=">Not equal</option>
                    <option value=">">Greater than</option>
                    <option value="<">Less than</option>
                    <option value=">=">Greater than or equal</option>
                    <option value="<=">Less than or equal</option>
                  </>
                )}

                <option value="^$">Is empty</option>
                <option value="^.+$">Is not empty</option>
              </select>
              {showInput && (
                <input
                  type="text"
                  placeholder="Enter Filter Value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </sapn>
  );
};

export default FilterInput;
