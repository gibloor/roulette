import React, { Fragment, useState } from "react";

interface ItemState {
  picture:string;
  title:string;
  id:number;
  cost:string;
  label:string;
  rare_label:string;
}

const EditCase = (item:ItemState) => {

  const [picture, setPicture] = useState(item.picture);
  const [title, setTitle] = useState(item.title);
  const [cost, setCost] = useState(item.cost);
  const [label, setLabel] = useState(item.label);
  const [rareLabel, setRareLabel] = useState(item.rare_label);

  const updateLink = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Number(cost);
    try {
      const body = { picture, title, cost, label, rareLabel };
      const response = await fetch(
        `http://localhost:5000/items/${item.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location.href = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="modal">
        <input
          type="text"
          className="form-control"
          value={picture}
          onChange={e => setPicture(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={cost}
          onChange={e => setCost(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={label}
          onChange={e => setLabel(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={rareLabel}
          onChange={e => setRareLabel(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-warning"
          data-dismiss="modal"
          onClick={e => updateLink(e)}
        >
          UPDATE
        </button>
      </div>
    </Fragment>
  );
};

export default EditCase;
