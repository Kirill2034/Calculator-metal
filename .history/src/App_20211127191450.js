import React, { useState } from 'react';
import './App.css';
import {BtnRadio} from './components/BtnRadio';
import Select from 'react-select';

const metals = [
  {
    id: 1,
    code: "gold",
    title: "Золото",
    finenessList: [
      {id: 1, value: 375, cash: 90, checkingAccount: 100},
      {id: 1, value: 575, cash: 190, checkingAccount: 250}
    ]
  },
  {
    id: 2,
    code: "argent",
    title: "Серебро",
    finenessList: [
      {id: 1, value: 375, cash: 90, checkingAccount: 100},
      {id: 1, value: 575, cash: 190, checkingAccount: 250}
    ]
  },
  {
    id: 3,
    code: "palladium",
    title: "Палладий",
    finenessList: [
      {id: 1, value: 375, cash: 90, checkingAccount: 100},
      {id: 1, value: 575, cash: 190, checkingAccount: 250}
    ]
  },
  {
    id: 4,
    code: "platinum",
    title: "Платина",
    finenessList: [
      {id: 1, value: 375, cash: 90, checkingAccount: 100},
      {id: 1, value: 575, cash: 190, checkingAccount: 250}
    ]
  },
]

const payments = [
  {
    code: "cash",
    title: "Наличные"
  },
  {
    code: "checkingAccount",
    title: "На расчётный счёт"
  }
]


const App = () => {

  const [selectedMetalId, setselectedMetalId] = useState(null);

  const onMetalItemClick = (id) => {
    setselectedMetalId(id);
  };

  return (
    <div className="App">
      <div className="title">
        <h2>Калькулятор</h2>
      </div>
      <div className="calculator">
        <div className="metal-image"></div>
        <div className="content">
          <div className="check-metal">
            {metals.map((metal) => (
            <BtnRadio 
              key={metal.id}
              item={metal}
              selected={selectedMetalId === metal.id}
              onClick={onMetalItemClick}
              />
          ))}
          </div>
          <div className="select-prop-metal">
            <h2>Укажите следующие параметры:</h2>
            <Select className="select" options={} placeholder="Проба металла"/>
            <Select className="select" options={payments} placeholder="Способ выплаты"/>
            <input type="text" placeholder="Вес металла (в граммах)"/>
          </div>
          <div className="calculate">
            <h2>Итого:</h2>
            <button>Рассчитать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;