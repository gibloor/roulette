import React, { Fragment, useEffect, useState } from "react";
import EditItem from "./EditItem";
import './style.css';

interface ItemState {
  picture:string;
  title:string;
  id:number;
  cost:string;
  label:string;
  rare_label:string;
}

const ListItems = () => {
  const [items, setItems] = useState([]);

  //delete case function

  const deleteItem = async (id:number) => {
    try {
      const deleteItem = await fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE"
      });

      setItems(items.filter((item:ItemState) => item.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/items");
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <tbody>
          {items.map((item:ItemState) => (
            <tr key={item.id}>
              <td><img className="imgItemList" src={item.picture}/></td>
              <td>
                <EditItem {...item}/>
              </td>
              <td>
                <button
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListItems;
