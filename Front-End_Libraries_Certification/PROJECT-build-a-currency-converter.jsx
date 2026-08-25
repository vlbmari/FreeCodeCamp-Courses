const { useState, useMemo } = React;

export function CurrencyConverter() {
    const [value, setValue] = useState(0);
  const [fromCurrent, setFromCurrent] = useState("USD");
    const [toCurrent, setToCurrent] = useState("EUR");

  const goodMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  const converterUsdToEur = useMemo(() => {
    return value / goodMapping[fromCurrent]
  }, [value, fromCurrent])

  const finalAmount = (converterUsdToEur * goodMapping[toCurrent]).toFixed(2);

  return (
    <>
      <h1>Currency Converter</h1>
      <div className="container">
        <label>
          <span>USD to EUR Conversion</span>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
        </label>

        <label>
          <span>Start Currency:</span>
          <select value={fromCurrent} onChange={(e) => setFromCurrent(e.target.value)}>
            {
              Object.keys(goodMapping).map(coin => (<option key={coin} value={coin}>{coin}</option>))
            }
          </select>
        </label>

        <label>
          <span>Target Currency:</span>
          <select value={toCurrent} onChange={(e) => setToCurrent(e.target.value)}>
            {
              Object.keys(goodMapping).map(coin => (<option key={coin} value={coin}>{coin}</option>))
            }
          </select>
        </label>
        {
          <p className="result">Converted Amount: {finalAmount} {toCurrent}</p>
        }
      </div>
    </>
  );
}

/* 
-- HTML --

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Currency Converter</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { CurrencyConverter } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<CurrencyConverter />);
    </script>
</body>

</html>

-- CSS --

body {
  background-color: black;
  font-family: arial;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  color: rgb(190, 253, 139);

}

.container {
  background-color: rgb(3, 6, 29);
  color: rgb(93, 144, 255);
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 50px;
  max-width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.result {
  color: rgb(253, 223, 139);
}

label{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input, select{
  padding: 5px;
  color: rgb(61, 61, 15);
  font-size: 1rem;
}

*/