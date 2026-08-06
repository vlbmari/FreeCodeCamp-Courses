//Build a Reusable Footer

export function Footer() {
  return (
    <footer className="container">
      <div className="top-container">
        <ul className="list">
          <li>
            <a href="">Fitness Dashboard</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>
        <ul className="list">
          <li>
            <a href="">Watch Videos</a>
          </li>
          <li>
            <a href="">Discord</a>
          </li>
        </ul>
        <ul className="list">
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <p>© 2024 Fitness Dashboard. All Rights Reserved.</p>
      <div className="bottom-container">
        <a href="#">🎮</a>
        <a href="#">🐦</a>
        <a href="#">💻</a>
        <a href="#">🏀</a>
      </div>
    </footer>
  );
}

/* 

-- HTML --

<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Reusable Footer Component</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.3/babel.min.js"></script>
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
      import { Footer } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<Footer />);
    </script>
  </body>
</html>


-- CSS --
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
}


.container {
  padding: 20px;
  background-color: rgb(237, 230, 230);
  font-family: arial;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

a {
  color: rgb(88, 85, 85);
  transition: transform 0.5s;
}

a:hover {
  color: rgb(28, 98, 122);
  transform: scale(1.1);
}

p {
  color: rgb(164, 164, 164);
}

.top-container {
  display: flex;
  gap: 60px;
  text-align: center;

}

.bottom-container {
  display: flex;
  gap: 20px;
  font-size: 25px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
______________________________________________
*/


