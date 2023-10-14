import React from "react";
import ContentList from "./listItems";
const Content = function ({ listItems, handelCheck, handelDelete }) {
  return (
    <div className="content-sec">
      {listItems.length ? (
        <ContentList
          listItemid={listItems.id}
          listItems={listItems}
          handelCheck={handelCheck}
          handelDelete={handelDelete}
        />
      ) : (
        <p className="empty">Your Todo list is empty!!!</p>
      )}
    </div>
  );
};
export default Content;
