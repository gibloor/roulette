import React, { Fragment, useState } from "react";

interface CaseState {
  picture:string;
  title:string;
  id:number;
  cost:string;
  items_label:string;
  items_rare_label: string;
  kit_cases: string;
}

const EditCase = (bag:CaseState) => {

  const [picture, setPicture] = useState(bag.picture);
  const [title, setTitle] = useState(bag.title);
  const [cost, setCost] = useState(bag.cost);
  const [itemsLabel, setItemsLabel] = useState(bag.items_label);
  const [itemsRareLabel, setItemsRareLabel] = useState(bag.items_rare_label);
  const [kitCases, setKitCases] = useState(bag.kit_cases);

  const updateLink = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Number(cost);
    try {
      const body = { picture, title, cost, itemsLabel, itemsRareLabel, kitCases };
      const response = await fetch(
        `http://localhost:5000/cases/${bag.id}`,
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
      <div
        className="modal"
      >
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
          value={itemsLabel}
          onChange={e => setItemsLabel(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={itemsRareLabel}
          onChange={e => setItemsRareLabel(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={kitCases}
          onChange={e => setKitCases(e.target.value)}
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
