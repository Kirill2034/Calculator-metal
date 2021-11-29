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
      {id: 2, value: 575, cash: 190, checkingAccount: 250}
    ]
  },
  {
    id: 2,
    code: "argent",
    title: "Серебро",
    finenessList: [
      {id: 1, value: 460, cash: 290, checkingAccount: 200},
      {id: 2, value: 700, cash: 390, checkingAccount: 350}
    ]
  },
  {
    id: 3,
    code: "palladium",
    title: "Палладий",
    finenessList: [
      {id: 1, value: 800, cash: 490, checkingAccount: 400},
      {id: 2, value: 500, cash: 590, checkingAccount: 550}
    ]
  },
  {
    id: 4,
    code: "platinum",
    title: "Платина",
    finenessList: [
      {id: 1, value: 300, cash: 690, checkingAccount: 600},
      {id: 2, value: 500, cash: 790, checkingAccount: 750}
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
  const [gramms, setGramms] = useState('');
  const [sum, setSum] = useState('');
  const [disable, setDisable] = useState(false);
  

  const onMetalChange = (newMetalValue) => {
    setMetal(newMetalValue);

    onFinenessChange(null);
    setSum('');
  };

  const onFinenessChange = (newFinenessValue) => {
    setFineness(newFinenessValue);
  };

  const onPaymentChange = (newPaymentValue) => {
    setPayment(newPaymentValue);
  }

  const onGrammsChange = (event) => {
    setGramms(event.target.value);
  }

  const onCount = () => {
    if (fineness && payment && gramms !== null || '') {
      setDisable(false);
    }

    const grammPrice = fineness.value[payment.value];
    const totalSum = grammPrice * parseInt(gramms);
    setSum(totalSum)
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
            <Select className="select" value={fineness} onChange={onFinenessChange} options={metal.finenessList.map(item => ({value: item, label: item.value}))} placeholder="Проба металла" />
            <Select className="select" value={payment} onChange={onPaymentChange} options={payments} placeholder="Способ выплаты"/>
            <input type="number" value={gramms} onChange={onGrammsChange} placeholder="Вес металла (в граммах)"/>
          </div>
          <div className="calculate">
            <h2>Итого:{sum}</h2>
            <button onClick={onCount} disabled={disable}>Рассчитать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;