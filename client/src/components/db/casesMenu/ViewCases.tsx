import React, { Fragment, useEffect, useState } from "react";
import './style.css';
import { Link, useLocation } from 'react-router-dom';

interface CaseState {
  picture:string;
  title:string;
  id:number;
  cost:string;
  items_label:string;
  items_rare_label:string;
}

interface CaseName {
  kitName: string
}

const ViewCases = (caseInfo:CaseName) => {
  const [cases, setCases] = useState([]);

  const getCases = async (kitCases:string) => {
    try {
      const response = await fetch(`http://localhost:5000/cases/kit/${kitCases}`);
      const jsonData = await response.json();
      setCases(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCases(caseInfo.kitName);
  }, []);

  return (
    <Fragment>
      <div className="casePool">
          {cases.map((bag:CaseState) => (
            <div key={bag.id}>
              <Link to={`/OpenCase/${bag.title}`}><img className="imgCasesList" src={bag.picture}/></Link>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default ViewCases;
