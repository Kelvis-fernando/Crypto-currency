const ExchangeRate = ({ exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency }) => {
  return (
    <div className="currency-converter">
      <h3>Exchange Rate</h3>
      <h1>{exchangeRate.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
      <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
    </div>
  );
};

export default ExchangeRate;
