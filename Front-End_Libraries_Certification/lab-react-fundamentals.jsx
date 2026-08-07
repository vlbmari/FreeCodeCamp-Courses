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


//Build a Mood Board
export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const cards = [
    {
      id: 1,
      color: "green",
      src: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Caribbean"
    },
    {
      id: 2,
      color: "lightblue",
      src: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach"
    },
    {
      id: 3,
      color: "magenta",
      src: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town"
    },
    {
      id: 4,
      color: "darkorange",
      src: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Suez Canal"
    },
    {
      id: 5,
      color: "darkblue",
      src: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini"
    },
    {
      id: 6,
      color: "gray",
      src: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul"
    },
  ]

  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {cards.map(card => ( <MoodBoardItem key={card.id} color={card.color} image={card.src} description={card.description} />))}
        {/* or {cards.map(card => ( <MoodBoardItem {...card}/>))} if all object property name are match the component prop names, e.g., key: 1, image: https://..., */}
      </div>
    </div>
  );
}

/*
-- HTML --

export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const cards = [
    {
      id: 1,
      color: "green",
      src: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Caribbean"
    },
    {
      id: 2,
      color: "lightblue",
      src: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach"
    },
    {
      id: 3,
      color: "magenta",
      src: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town"
    },
    {
      id: 4,
      color: "darkorange",
      src: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Suez Canal"
    },
    {
      id: 5,
      color: "darkblue",
      src: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini"
    },
    {
      id: 6,
      color: "gray",
      src: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul"
    },
  ]

  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {cards.map(card => ( <MoodBoardItem key={card.id} color={card.color} image={card.src} description={card.description} />))}
      </div>
    </div>
  );
}

-- CSS --

body {
  background-color: #ffffcc;
}

.mood-board-heading {
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-top: 20px;
}

.mood-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.mood-board-item {
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 250px;
}

.mood-board-image {
  border-radius: 5px;
  width: 180px;
  height: 150px;
  object-fit: cover;
}

.mood-board-text {
  margin-top: 20px;
  font-size: 1.2em;
}

*/