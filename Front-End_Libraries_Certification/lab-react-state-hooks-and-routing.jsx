//Build a Color Picker App
const { useState } = React;

export const ColorPicker = () => {
  const [changeColor, setChangeColor] = useState("#ffffff");

  function handleChangeColor(e) {
    setChangeColor(e.target.value);
  }

  return (
    <div id="color-picker-container" style={{backgroundColor: changeColor}}>
      <p>Choose a color using the color input below:</p>
      <input id="color-input" type="color" value={changeColor} onChange={handleChangeColor} />
    </div>
  );

};

/*
-- HTML --

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Color Picker</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
</head>

<body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { ColorPicker } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<ColorPicker />);
    </script>
</body>

</html>

-- CSS --

body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
}

#color-picker-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    font-family: monospace; 
}


p{
    margin-bottom: 10%;
}


input[type="color"] {
    position: absolute;
    margin-top: 50px;
    height: 40px;
}
______________________________________________
*/


//Build a One-Time Password Generator
const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otpAtual, setOtpAtual] = useState("");
  const [seconds, setSeconds] = useState(0);
  const text = "Click 'Generate OTP' to get a code";

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  function generateOtp() {
    let randomOtp = "";
    while (randomOtp.length < 6) {
      randomOtp += Math.floor(Math.random() * 10);
    }
    setOtpAtual(randomOtp);
    setSeconds(5);
  }

  let timerMessage = "";
  if (seconds > 0) {
    timerMessage = `Expires in: ${seconds} seconds`;
  } else if (seconds === 0 && otpAtual) {
    timerMessage = "OTP expired. Click the button to generate a new OTP.";
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otpAtual || text}</h2>
      <p id="otp-timer" aria-live="polite">{timerMessage}</p>
      <button 
        disabled={seconds > 0} 
        id="generate-otp-button" 
        onClick={generateOtp}
      >
        Generate OTP
      </button>
    </div>
  );
};


/*
-- HTML --

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>OTP Generator</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
</head>

<body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { OTPGenerator } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<OTPGenerator />);
    </script>
</body>

</html>

-- CSS --

.container{
  background-color: rgb(180, 251, 180);
  font-family: monospace;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  text-align: center;
}

.container button{
  padding: 10px;
  border-radius: 10%;
  border: none;
  color: rgb(16, 39, 16);
  background-color: rgb(246, 242, 242);
  box-shadow: 0 2px 10px 1px rgb(16, 39, 16);
  cursor: pointer;
  font-weight: bold;
}

button:disabled{
  cursor: not-allowed;
}
______________________________________________
*/