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
    value: "cash",
    label: "Наличные"
  },
  {
    value: "checkingAccount",
    label: "На расчётный счёт"
  }
]


const App = () => {
  const [metal, setMetal] = useState(metals[0]);
  const [fineness, setFineness] =  useState(null);
  const [payment, setPayment] = useState(null);
  

  const onMetalChange = (newMetalValue) => {
    setMetal(newMetalValue);
  };

  const onFinenessChange = (newFinenessValue) => {
    setFineness(newFinenessValue);
  };

  const onPaymentChange = (newPaymentValue) => {
    setPayment(newPaymentValue);
  }

  

  return (
    <div className="App">
      <div className="title">
        <h2>Калькулятор</h2>
      </div>
      <div className="calculator">
        <div className="metal-image"></div>
        <div className="content">
          <div className="check-metal">
            {metals.map((item) => (
            <BtnRadio 
              key={item.id}
              title={item.title}
              selected={metal.id === item.id}
              onClick={() => onMetalChange(item)}
              />
          ))}
          </div>
          <div className="select-prop-metal">
            <h2>Укажите следующие параметры:</h2>
            <Select className="select" value={fineness} options={metal.finenessList.map(item => ({value: item, label: item.value}))} placeholder="Проба металла" />
            <Select className="select" value={payment} onChange={onPaymentChange} options={payments} placeholder="Способ выплаты"/>
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