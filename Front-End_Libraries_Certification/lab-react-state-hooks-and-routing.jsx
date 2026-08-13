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

*/