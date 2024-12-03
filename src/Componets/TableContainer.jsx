import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableContainer = ({ fields, data, paginationOptions, styles }) => {
  const [filters, setFilters] = useState({ field: "", value: "", type: "" });
  const [sort, setSort] = useState({ field: fields[0].field, dir: true });
  const [showData, setShowData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(paginationOptions[0]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let tempData = data;

    if (filters.value !== "") {
      if (filters.type === "numeric") {
        tempData = data.filter((i) => {
          const fieldValue = parseFloat(i[filters.field]);
          if (isNaN(fieldValue)) return false;
          switch (filters.filter) {
            case "=":
              return fieldValue === filters.value;
            case "!=":
              return fieldValue !== filters.value;
            case ">":
              return fieldValue > filters.value;
            case "<":
              return fieldValue < filters.value;
            case ">=":
              return fieldValue >= filters.value;
            case "<=":
              return fieldValue <= filters.value;
            default:
              return true;
          }
        });
      } else {
        tempData = data.filter((i) =>
          new RegExp(filters.value, "i").test(String(i[filters.field] ?? ""))
        );
      }
    }

    tempData = tempData?.sort((a, b) => {
      if (a[sort.field] < b[sort.field]) return sort.dir ? -1 : 1;
      if (a[sort.field] > b[sort.field]) return sort.dir ? 1 : -1;
      return 0;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = tempData.slice(indexOfFirstItem, indexOfLastItem);

    setShowData([...paginatedData]);
    
    setTotalPages(Math.ceil(tempData.length / itemsPerPage));

  }, [sort, filters, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  return (
    <div style={styles}>
      <table>
        <TableHeader
          fields={fields}
          sort={sort}
          setSort={setSort}
          filters={filters}
          setFilters={setFilters}
        />
        <TableBody data={showData} fields={fields} />
      </table>

      <div className="pagination">
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          {paginationOptions.map((option, index) => (
            <option key={index} value={option}>
              {option} items per page
            </option>
          ))}
        </select>

        <div>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={index + 1 === currentPage ? "active" : ""}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div>
          <span>
            Page {currentPage} of {totalPages} ({showData.length} items)
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;