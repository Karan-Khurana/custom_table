import React from "react";

const TableBody = ({ fields, data }) => {
  return (
    <tbody>
      {data?.map((curr, index) => {
        return (
          <tr key={index}>
            {fields?.map((i, index) => {
              return <td key={index}>{curr[i.field]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
