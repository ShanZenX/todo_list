import "./App.css";
import Header from "./Header";
import Content from "./content";
import Fotter from "./Fotter";
import { useState } from "react";
import Additem from "./Additem";

export default function App() {
  const [listItems, setItems] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  const handelCheck = (id) => {
    const listItem = listItems.map((listItems) =>
      listItems.id === id
        ? { ...listItems, checked: !listItems.checked }
        : listItems
    );
    setItems(listItem);
    localStorage.setItem("todolist", JSON.stringify(listItem));
  };

  const handelDelete = (id) => {
    const listItem = listItems.filter((listItems) => listItems.id !== id);
    setItems(listItem);
    localStorage.setItem("todolist", JSON.stringify(listItem));
  };

  const [newItems, setNewItem] = useState("");

  const addItem = (Item) => {
    const id = listItems.length ? listItems[listItems.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, todo: Item }; // Use "todo" instead of "Item"
    const listItem = [...listItems, addNewItem];
    setItems(listItem);
    localStorage.setItem("todolist", JSON.stringify(listItem));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItems) console.log("submited");
    addItem(newItems);
    setNewItem("");
  };

  return (
    <section className="main-screen">
      <Header />
      <Additem
        newItems={newItems}
        setNewItem={setNewItem}
        handelSubmit={handelSubmit}
      />
      <Content
        listItems={listItems}
        handelCheck={handelCheck}
        handelDelete={handelDelete}
      />
      <Fotter length={listItems.length} />
    </section>
  );
}
