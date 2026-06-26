const poll = new Map();
poll.set("Turkey", new Set());
poll.set("Morocco", new Set());
poll.set("Spain", new Set());


function addOption(option) {
  if (option === "") {
    return "Option cannot be empty.";
  } else if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
}

function vote(option, voterId) {
  if (voterId === "") {
    return "Voter cannot be empty.";
  }

  const voters = poll.get(option);
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  } else {
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }

}

function displayResults() {
  let pollString = "Poll Results:";
  poll.forEach((value, key) => {
    pollString += `\n${key}: ${value.size} votes`;
  })
  return pollString;
}

vote("Nigeria", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
vote("Spain", "traveler3");
console.log(displayResults());