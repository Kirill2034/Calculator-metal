import React, { useState } from "react";
import "./App.css";
import { Chip } from "./components/Chip";
import Select from "react-select";

const metals = [
  {
    id: 1,
    code: "gold",
    img: "https://static8.depositphotos.com/1000128/859/i/600/depositphotos_8595716-stock-photo-stacks-of-gold-bars.jpg",
    title: "Золото",
    finenessList: [
      { id: 1, value: 375, cash: 90, checkingAccount: 100 },
      { id: 2, value: 575, cash: 190, checkingAccount: 250 },
      { id: 3, value: 775, cash: 290, checkingAccount: 350 },
    ],
  },
  {
    id: 2,
    code: "argent",
    img: "https://st.depositphotos.com/1187563/4173/i/600/depositphotos_41738915-stock-photo-stack-of-bank-silver-bars.jpg",
    title: "Серебро",
    finenessList: [
      { id: 1, value: 460, cash: 290, checkingAccount: 200 },
      { id: 2, value: 700, cash: 390, checkingAccount: 350 },
      { id: 3, value: 975, cash: 490, checkingAccount: 450 },
    ],
  },
  {
    id: 3,
    code: "palladium",
    img: "https://st3.depositphotos.com/1001877/34917/i/600/depositphotos_349170978-stock-photo-palladium-bars-or-ingots-background.jpg",
    title: "Палладий",
    finenessList: [
      { id: 1, value: 800, cash: 490, checkingAccount: 400 },
      { id: 2, value: 500, cash: 590, checkingAccount: 550 },
      { id: 3, value: 375, cash: 690, checkingAccount: 650 },
    ],
  },
  {
    id: 4,
    code: "platinum",
    img: "https://images11.popmeh.ru/upload/img_cache/766/7666779fb91dc5440bbf12938e462122_ce_1200x640x0x119_cropped_666x444.jpg",
    title: "Платина",
    finenessList: [
      { id: 1, value: 300, cash: 690, checkingAccount: 600 },
      { id: 2, value: 500, cash: 790, checkingAccount: 750 },
      { id: 3, value: 275, cash: 890, checkingAccount: 850 },
    ],
  },
];

const payments = [
  {
    value: "cash",
    label: "Наличные",
  },
  {
    value: "checkingAccount",
    label: "На расчётный счёт",
  },
];

const App = () => {
  const [metal, setMetal] = useState(metals[0]);
  const [metalImage, setMetalImage] = useState(metals[0].img);
  const [fineness, setFineness] = useState(null);
  const [payment, setPayment] = useState(null);
  const [gramms, setGramms] = useState("");
  const [sum, setSum] = useState(localStorage.getItem("sum"));

  const onMetalChange = (newMetalValue) => {
    setMetal(newMetalValue);
    setMetalImage(newMetalValue.img);

    onFinenessChange(null);
    setSum(null);
  };

  const onFinenessChange = (newFinenessValue) => {
    setFineness(newFinenessValue);
  };

  const onPaymentChange = (newPaymentValue) => {
    setPayment(newPaymentValue);
  };

  const onGrammsChange = (event) => {
    setGramms(event.target.value);
  };

  const onCount = () => {
    const grammPrice = fineness.value[payment.value];
    const totalSum = grammPrice * parseInt(gramms);
    setSum(totalSum);

    localStorage.setItem("sum", totalSum);
  };

  return (
    <div className="calculator">
      <div className="calculator__title">
        <h2>Калькулятор</h2>
      </div>
      <div className="calculator__content">
        <div className="calculator__metal-image">
          <img src={metalImage} alt="" />
        </div>
        <div className="calculator__metals">
          <div className="check-metal">
            {metals.map((item) => (
              <Chip
                key={item.id}
                title={item.title}
                selected={metal.id === item.id}
                onClick={() => onMetalChange(item)}
              />
            ))}
          </div>
          <div className="calculator__parameters ">
            <h2>Укажите следующие параметры:</h2>
            <Select
              className="select"
              value={fineness}
              onChange={onFinenessChange}
              options={metal.finenessList.map((item) => ({
                value: item,
                label: item.value,
              }))}
              placeholder="Проба металла"
              required
            />
            <Select
              className="select"
              value={payment}
              onChange={onPaymentChange}
              options={payments}
              placeholder="Способ выплаты"
              required
            />
            <input
              type="number"
              value={gramms}
              onChange={onGrammsChange}
              placeholder="Вес металла (в граммах)"
              required
            />
          </div>
          <div className="calculator__calculate">
            {sum && <h2>Итого:{sum}</h2>}

            <button
              disabled={!fineness || !payment || !gramms}
              onClick={onCount}
            >
              Рассчитать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
