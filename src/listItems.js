import React from "react";
import { MdDelete } from "react-icons/md";

const ContentList = function ({ listItems, handelCheck, handelDelete }) {
  return (
    <ul>
      {listItems.map((listItems) => (
        <li key={listItems.id} className="list-items">
          <div className="list-content">
            <input
              className="checkbox"
              type="checkbox"
              checked={listItems.checked}
              onChange={() => {
                handelCheck(listItems.id);
              }}
            />
            <p
              style={
                listItems.checked ? { textDecoration: "line-through" } : null
              }
              onDoubleClick={() => {
                handelCheck(listItems.id);
              }}
            >
              {listItems.todo}
            </p>
          </div>
          <div className="delete-sec">
            <MdDelete
              className="delete"
              role="button"
              onClick={() => handelDelete(listItems.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
