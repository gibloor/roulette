import React, { Fragment, useEffect, useState } from "react";
import EditImage from "./EditImage";

interface ImageState {
  link:string;
  title:string;
  id:number;
}

const ListImages = () => {
  const [images, setImages] = useState([]);

  const deleteImage = async (id:number) => {
    try {
      const deleteImage = await fetch(`http://localhost:5000/imagesMenu/${id}`, {
        method: "DELETE"
      });

      setImages(images.filter((image:ImageState) => image.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:5000/imagesMenu");
      const jsonData = await response.json();
      setImages(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <tbody>
          {images.map((image:ImageState) => (
            <tr key={image.id}>
              <td><img className="imgColumn" src={image.link}/></td>
              <td>
                <EditImage {...image}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteImage(image.id)}
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

export default ListImages;
