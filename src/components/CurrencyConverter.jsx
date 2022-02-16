import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "ad1a634496mshcc6365583085806p15f9bdjsn07f41c943008",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
        setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
        setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(exchangeRate);

  return (
    <div className="currency-converter text-center">
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
                {currencies.map((currency, index) => (
                  <option key={index}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Second Currency</td>
            <td>
              <input name="currency-amount-2" disabled={true} value={result} />
            </td>
            <td>
              <select
                name="current-option-2"
                value={chosenSecondaryCurrency}
                className="currency-options"
                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
              >
                {currencies.map((currency, index) => (
                  <option key={index}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={convert}>Convert</button>

      <ExchangeRate exchangeRate={exchangeRate} chosenSecondaryCurrency={chosenSecondaryCurrency} chosenPrimaryCurrency={chosenPrimaryCurrency} />
    </div>
  );
};

export default CurrencyConverter;
