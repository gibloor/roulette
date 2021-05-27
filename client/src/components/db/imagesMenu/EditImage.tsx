import React, { Fragment, useState } from "react";

type ImageStates = {
  link:string;
  title:string;
  id:number;
}

const EditImage = (image:ImageStates) => {

  const [link, setLink] = useState(image.link);
  const [title, setTitle] = useState(image.title);

  //edit link function

  const updateLink = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = { link, title };
      const response = await fetch(
        `http://localhost:5000/imagesMenu/${image.id}`,
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
        id={`id${image.id}`}
        //onClick={() => (setLink(image.link), setTitle(image.title))}
      >
        <input
          type="text"
          className="form-control"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
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

export default EditImage;
