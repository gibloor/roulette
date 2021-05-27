import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import './App.css';

import HeaderMenu from './components/HeaderMenu/index';

import MainPage from './components/pages/mainPage/index';
import SecretShop from './components/pages/secretShop/index';
import OpenCase from './components/pages/openCase/index';

import InputImage from './components/db/imagesMenu/InputImage';
import ListImages from './components/db/imagesMenu/ListImages';

import InputCase from './components/db/casesMenu/InputCase';
import ListCases from './components/db/casesMenu/ListCases';

import InputItem from './components/db/itemsMenu/InputItem';
import ListItems from './components/db/itemsMenu/ListItems';

function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <HeaderMenu/>

          <Route exact path="/" component={() => <MainPage/>}/>
          <Route path="/secretShop" component={() => <SecretShop/>}/>
          <Route path="/OpenCase/" component={() => <OpenCase/>}/>
          

        
        <div className='dbImages'>
          <InputImage/>
          <ListImages/>
        </div>
        <div className='dbCases'>
          <InputCase/>
          <ListCases/>
        </div>
        <div className='dbItems'>
          <InputItem/>
          <ListItems/>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
