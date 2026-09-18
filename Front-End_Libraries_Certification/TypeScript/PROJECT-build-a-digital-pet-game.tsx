const { useState, useEffect, useRef } = React;

enum Action {
  EAT = 'EAT',
  PLAY = 'PLAY',
  SLEEP = 'SLEEP'
}

enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY
}

const moodEmojis: Record<PetMood, string> = {
  [PetMood.HAPPY]: '😊',
  [PetMood.EXCITED]: '😃',
  [PetMood.CONTENT]: '🙂',
  [PetMood.SAD]: '😢',
  [PetMood.TIRED]: '😴',
  [PetMood.SICK]: '🤒',
  [PetMood.HUNGRY]: '😋'
};

export const PetGame = () => {
  const [showForm, setShowForm] = useState(true);
  const [petName, setPetName] = useState('');

  const [hunger, setHunger] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [happiness, setHappiness] = useState(100);

  const limit = (val: number) => Math.max(0, Math.min(100, val));
  const timerRef = useRef<any>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setHunger(100);
      setEnergy(100);
      setHappiness(0);
    }, 5000);
  };

  useEffect(() => {
    if (!showForm) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showForm]);

  const handleEat = () => {
    setHunger((prev) => limit(prev - 10));
    setEnergy((prev) => limit(prev + 5));
    resetTimer();
  };

  const handlePlay = () => {
    setEnergy((prev) => limit(prev - 5));
    setHappiness((prev) => limit(prev + 5));
    resetTimer();
  };

  const handleSleep = () => {
    setHunger((prev) => limit(prev + 10));
    setEnergy((prev) => limit(prev + 5));
    resetTimer();
  };

  const discoverMood = (): PetMood => {
    if (hunger > 70) return PetMood.HUNGRY;
    if (energy < 30) return PetMood.TIRED;
    if (happiness < 30) return PetMood.SAD;
    if (happiness > 80 && energy > 70) return PetMood.EXCITED;
    if (happiness > 60) return PetMood.HAPPY;
    return PetMood.CONTENT;
  };

  const currentMood = discoverMood();

  if (!showForm) {
    return (
      <div>
        <h2 className="pet-name">{petName}</h2>

        <div>
          <span>{moodEmojis[currentMood]}</span>
          <span>{PetMood[currentMood]}</span>
        </div>

        <button id="eat-action" onClick={handleEat}>{Action.EAT}</button>
        <button id="play-action" onClick={handlePlay}>{Action.PLAY}</button>
        <button id="sleep-action" onClick={handleSleep}>{Action.SLEEP}</button>

        <div>
          <div className="stat">
            Hunger
            <span className="stat-value">{hunger}</span>
            <div style={{ width: `${hunger}%` }}></div>
          </div>

          <div className="stat">
            Energy
            <span className="stat-value">{energy}</span>
            <div style={{ width: `${energy}%` }}></div>
          </div>

          <div className="stat">
            Happiness
            <span className="stat-value">{happiness}</span>
            <div style={{ width: `${happiness}%` }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        const inputVal = e.currentTarget.elements['pet-name']?.value || petName;
        setPetName(inputVal);
        setShowForm(false);
      }}
    >
      <h1>What is your pet's name?</h1>
      <input
        id="pet-name"
        name="pet-name"
        type="text"
        value={petName}
        required
        onChange={(e) => setPetName(e.target.value)}
      />
      <button type="submit">Start Game</button>
    </form>
  );
};
/*

-- HTML -- 

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Pet Game</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.tsx"
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
      import { PetGame } from './index.tsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<PetGame />);
    </script>
  </body>
</html>

-- CSS --

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #eff3ff 0%, #f6eefc 100%);
  color: #1a202c;
  padding: 24px;
}

/* Card Principal e Formulário 
form,
div:has(> .pet-name) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 440px;
}

/* Formulário Inicial 
form {
  background: #ffffff;
  padding: 32px 24px;
  border-radius: 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
}

form h1 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

form input[type="text"] {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 1rem;
  outline: none;
  background: #c5d2e0;
  border-color: #a824431d;
}

form input[type="text"]:focus {
  border-color: #a82443;
}

form button[type="submit"] {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: #a82443;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(168, 36, 67, 0.3);
}

/* Card Superior do Pet 
.pet-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  text-align: center;
}

div:has(> .pet-name) {
  background: #ffffff;
  padding: 32px 24px 28px;
  border-radius: 32px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.04);
}

/* Emoji do humor 
div:has(> .pet-name) > div:first-of-type {
  font-size: 3.5rem;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

div:has(> .pet-name) > div:first-of-type span:last-child {
  font-size: 0.9rem;
  font-weight: 600;
  color: #64748b;
}

/* Botões de Ação 
#eat-action,
#play-action,
#sleep-action {
  background: #a82443;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  border: 1px solid #851c35;
  border-radius: 10px;
  padding: 8px 18px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(168, 36, 67, 0.35);
  transition: transform 0.1s ease, filter 0.1s ease;
}

#eat-action:active,
#play-action:active,
#sleep-action:active {
  transform: translateY(1px);
  filter: brightness(0.95);
}

/* Container de botões agrupados 
div:has(> #eat-action) {
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-top: 4px;
}

/* Cards das Estatísticas 
div:has(> .stat) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-top: 12px;
}

.stat {
  position: relative;
  background: #ffffff;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
  font-weight: 700;
  font-size: 0.95rem;
  color: #334155;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

/* Valor numérico 
.stat-value {
  font-weight: 800;
  color: #0f172a;
}

.stat-value::after {
  content: '%';
  font-size: 0.8rem;
  margin-left: 1px;
}

/* Barra de fundo cinza 
.stat > div {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 999px;
  position: relative;
  overflow: hidden;
  margin-top: 6px;
}

/* Preenchimento dinâmico verde 
.stat > div::before {
  content: '';
  display: block;
  height: 100%;
  width: inherit;
  background: #34d399;
  border-radius: 999px;
  transition: width 0.3s ease;
}

*/