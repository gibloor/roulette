import React, { Fragment, useState } from "react";

const InputCase = () => {

  const [title, setTitle] = useState("");

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { title };
      const response = await fetch("http://localhost:5000/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.href = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">+Add+</button>
      </form>
    </Fragment>
  );
};

export default InputCase;
