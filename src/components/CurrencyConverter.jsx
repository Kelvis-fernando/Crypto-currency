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
      <table>
        <tbody>
          <tr>
            <td>Primary Currency</td>
            <td>
              <input
                type="number"
                name="currency-amount-1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-black bg-white appearance-none border-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </td>
            <td>
              <select
                name="current-option-1"
                value={chosenPrimaryCurrency}
                className="currency-options text-black border-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              <input
                name="currency-amount-2"
                disabled={true}
                value={result}
                className="text-black bg-gray-300"
              />
            </td>
            <td>
              <select
                name="current-option-2"
                value={chosenSecondaryCurrency}
                className="currency-options text-black border-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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

      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={convert}
      >
        Convert
      </button>

      <ExchangeRate
        exchangeRate={exchangeRate}
        chosenSecondaryCurrency={chosenSecondaryCurrency}
        chosenPrimaryCurrency={chosenPrimaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
