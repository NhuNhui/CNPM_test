import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          
            <th className="button">
              <input type="checkbox" All/>
            </th>
            <th>ID máy in</th>
            <th>Tên máy in</th>
            <th>Vị trí máy in</th>
            <th>Trạng thái Máy in</th>
            <th>Hoạt động</th>
          
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                
                <td className="button">
                  {/* <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span> */}
                  <input type="checkbox"/>
                </td>
                <td>{row.id}</td>
                <td className="expand">{row.name}</td>
                <td className="expand">{row.place}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className="button">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};