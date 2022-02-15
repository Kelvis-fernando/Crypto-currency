import { useState } from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
  const [amount, setAmount] = useState(1);

  console.log(amount);

  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <table className="border-collapse border border-slate-500 ...">
        <tbody>
          <tr>
            <td>Primary Currency</td>
            <td>
              <input
                type="number"
                name="currency-amount-1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
            <td>
              <select
                name="current-option-1"
                value={chosenPrimaryCurrency}
                className="currency-options"
                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency, index) => (<option key={index}>{currency}</option>))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Second Currency</td>
            <td>
              <input
                type="number"
                name="currency-amount-2"
                value={""}
              />
            </td>
            <td>
              <select
                name="current-option-2"
                value={chosenSecondaryCurrency}
                className="currency-options"
                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
              >
                {currencies.map((currency, index) => (<option key={index}>{currency}</option>))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
