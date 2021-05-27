import React, {Fragment, useEffect, useState} from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';
import ItemsSlider from './slider';



interface ItemState {
  picture:string;
  title:string;
  id:number;
  cost:string;
  label:string;
  rare_label:string;
}

interface CostState {
  cost: number
}

const error = {
  title: 'ERROR'
}

const OpenCase = () => {

  const location = useLocation();
  const path = location.pathname;
  const directories = path.split("/");
  const caseName = directories[(directories.length - 1)];

  const [items, setItems] = useState<ItemState[]>([]);
  const [box, setBox] = useState(error);


  const getCase = async (caseName:string) => {
    try {
      const response = await fetch(`http://localhost:5000/cases/kit_name/${caseName}`);
      const jsonData = await response.json();
      setBox(jsonData[0]);
      getItems(jsonData[0].items_label, jsonData[0].items_rare_label);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getItems = async (label:string, rareLabel:string) => {
      try {
      const response = await fetch(`http://localhost:5000/items/kit?label=${label}&rareLabel=${rareLabel}`);
      const jsonData = await response.json();
      const sorted = jsonData.sort((a: CostState, b: CostState) => b.cost - a.cost);
      setItems(sorted);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCase(caseName);
  }, []);

  return (
    <Fragment>
      <div className='itemsBlock'>
        <div className="box">
          {box.title}
          <ItemsSlider images={items}/>
        </div>
        <div className="itemsInBox">
          {items.map((item:ItemState) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <img className='itemImage' src={item.picture}></img>
              <h4>{item.cost}</h4>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default OpenCase;
