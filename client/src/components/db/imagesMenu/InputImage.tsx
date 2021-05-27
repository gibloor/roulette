import React, { Fragment, useState } from "react";

const InputImage = () => {

  const [link, setLink] = useState("");

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { link };
      const response = await fetch("http://localhost:5000/imagesMenu", {
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
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <button type="submit">+Add+</button>
      </form>
    </Fragment>
  );
};

export default InputImage;
