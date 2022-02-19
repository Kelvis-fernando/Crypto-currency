const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
      <div className="exchenge-rate">
        <h3>Exchange Rate</h3>
        <h1>{exchangeRate.toLocaleString('fullwide', {maximumFractionDigits:2, style:'currency', currency:'USD', useGrouping:true})}</h1>
        <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
      </div>
    );
  };
  
  export default ExchangeRate;
  