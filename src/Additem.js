import React from "react";
import { MdAssignmentAdd } from "react-icons/md";
const Additem = ({ newItems, setNewItem, handelSubmit }) => {
  return (
    <form className="add_form" onSubmit={handelSubmit}>
      <input
        autoFocus
        id="additem"
        type="text"
        placeholder="Add item"
        value={newItems}
        onChange={(e) => setNewItem(e.target.value)}
        required
      ></input>
      <button type="submit" className="addbutton">
        <MdAssignmentAdd className="addbutton-img" />
      </button>{" "}
    </form>
  );
};
export default Additem;
