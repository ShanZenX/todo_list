import React from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
const Additem = ({ newItems, setNewItem, handelSubmit }) => {
  return (
    <form className="add_form" onSubmit={handelSubmit}>
      <input
        autoFocus
        id="additem"
        type="text"
        placeholder="Add todo"
        value={newItems}
        onChange={(e) => setNewItem(e.target.value)}
        required
      ></input>
      <button type="submit" className="addbutton">
        {/* <MdAssignmentAdd  /> */}
        <MdAddCircle className="addbutton-img" />
      </button>{" "}
    </form>
  );
};
export default Additem;
