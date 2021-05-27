import React, { Fragment, useEffect, useState } from "react";
import EditCase from "./EditCase";
import './style.css';

interface CaseState {
  picture:string;
  title:string;
  id:number;
  cost:string;
  items_label:string;
  items_rare_label:string;
  kit_cases:string;
}

const ListCases = () => {
  const [cases, setCases] = useState([]);

  //delete case function

  const deleteCase = async (id:number) => {
    try {
      const deleteCase = await fetch(`http://localhost:5000/cases/${id}`, {
        method: "DELETE"
      });

      setCases(cases.filter((bag:CaseState) => bag.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCases = async () => {
    try {
      const response = await fetch("http://localhost:5000/cases");
      const jsonData = await response.json();
      setCases(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCases();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <tbody>
          {cases.map((bag:CaseState) => (
            <tr key={bag.id}>
              <td><img className="imgCasesList" src={bag.picture}/></td>
              <td>
                <EditCase {...bag}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCase(bag.id)}
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

export default ListCases;
