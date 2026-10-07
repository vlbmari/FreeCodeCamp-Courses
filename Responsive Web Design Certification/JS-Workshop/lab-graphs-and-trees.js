//Build an Adjacency List to Matrix Converter
function adjacencyListToMatrix(adjList) {
  const nodes = Object.keys(adjList);
  const numNodes = nodes.length;
  const matrix = Array.from({ length: numNodes }, () => Array(numNodes).fill(0));

  for (const node of nodes) {
    const row = Number(node);
    for (const neighbor of adjList[node]) {
      matrix[row][neighbor] = 1;
    }
  }

  for (const row of matrix) {
    console.log(row);
  }

  return matrix;
}

