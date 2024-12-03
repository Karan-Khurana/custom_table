import React from "react";
import FilterInput from "./FilterInput";

const TableHeader = ({ fields, setSort, sort, filters, setFilters }) => {
  return (
    <thead>
      <tr>
        {fields?.map((i, index) => {
          return (
            <th
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => {
                setSort((prev) => {
                  return {
                    field: i.field,
                    dir: prev.field == i.field ? !prev.dir : true,
                  };
                });
              }}
            >
              {i?.headerName}
              {i.field === sort.field && (sort.dir ? <>&darr;</> : <>&uarr;</>)}
              <FilterInput
                filters={filters}
                setFilters={setFilters}
                field={i.field}
                fieldName={i?.headerName}
                type={i.type}
              />
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
