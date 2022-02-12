import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <table className="border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">State</th>
            <th className="border border-slate-600 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 ...">Primary Currency</td>
            <td className="border border-slate-700 ...">
                <input 
                    type="number"
                    name="currency-amount-1"
                    value={""}
                />
            </td>
          </tr>
        </tbody>
      </table>
      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
