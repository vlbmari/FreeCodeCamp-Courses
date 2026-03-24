//Build a Quiz Game
const questions = [
  {
    category: "HTML",
    question: "Which HTML tag is used to define the largest heading?",
    choices: ["<header>", "<h6>", "<h1>"],
    answer: "<h1>"
  },
  {
    category: "CSS",
    question: "Which CSS property controls the text size?",
    choices: ["text-style", "font-size", "text-size"],
    answer: "font-size"
  },
  {
    category: "CSS",
    question: "Which property is used to change the background color of an element?",
    choices: ["color", "background-style", "background-color"],
    answer: "background-color"
  },
  {
    category: "JavaScript",
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["alert('Hello World');", "msg('Hello World');", "print('Hello World');"],
    answer: "alert('Hello World');"
  },
  {
    category: "JavaScript",
    question: "How do you call a function named 'myFunction'?",
    choices: ["myFunction();", "call myFunction();", "read myFunction();"],
    answer: "myFunction();"
  }
];

function getRandomQuestion(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + questionObject.answer;
  }
}

const currentQuestion = getRandomQuestion(questions);
const resultComputer = getRandomComputerChoice(currentQuestion.choices);
console.log(getResults(currentQuestion, resultComputer));


//Build a Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

const { ...recordCollectionCopy } = recordCollection;

updateRecords(recordCollectionCopy, 1245, "artist", "oi");


function updateRecords(records, id, prop, value) {
  if (records.hasOwnProperty(id)) {
    console.log("Album found");

    if (value === "") {
      delete records[id][prop];
      console.log("Property deleted");
    } else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && value !== "" && Object.hasOwn(records[id], "tracks") === false) {
      records[id][prop] = [];
      records[id][prop].push(value);
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    }
  } else {
    console.log("Algum not found")
  }
  return records;
}

//Build a Cargo Manifest Validator
  const manifest = {
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 831,
    unit: "lb",
    hazmat: false
  }

function normalizeUnits(manifest){
  const { ...manifestCopy } = manifest;
  if(manifestCopy["unit"] === "lb"){
    manifestCopy["weight"] *= 0.45;
    manifestCopy["unit"] = "kg"
  } 
  return manifestCopy;
}

function validateManifest(manifest) {
  let validatedManifest = {};

  if (manifest.containerId === undefined) {
    validatedManifest.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || !Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    validatedManifest.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    validatedManifest.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    validatedManifest.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    validatedManifest.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    validatedManifest.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    validatedManifest.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    validatedManifest.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    validatedManifest.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validatedManifest.hazmat = "Invalid";
  }

  return validatedManifest;
}

function processManifest(manifest){
  const normalizedManifest = normalizeUnits(manifest);
  const validatedManifest = validateManifest(manifest);
  if (Object.keys(validatedManifest).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`)
    console.log(`Total weight: ${normalizedManifest.weight} kg`)
  }
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validatedManifest);
  }
}