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

//Implement the Depth-First Search Algorithm
function dfs(graph, root) {
  const visited = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (!visited.includes(current)) {
      visited.push(current);

      for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
        if (graph[current][neighbor] === 1 && !visited.includes(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return visited;
}

//Implement the N-Queens Algorithm
function dfsNQueens(n) {
  if (n < 1) return [];

  const solutions = [];

  function isValid(board, row, col) {
    for (let prevRow = 0; prevRow < row; prevRow++) {
      const prevCol = board[prevRow];
      if (prevCol === col || Math.abs(prevCol - col) === row - prevRow) {
        return false;
      }
    }
    return true;
  }

  function dfs(row, currentBoard) {
    if (row === n) {
      solutions.push([...currentBoard]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(currentBoard, row, col)) {
        currentBoard.push(col);
        dfs(row + 1, currentBoard);
        currentBoard.pop(); 
      }
    }
  }

  dfs(0, []);
  return solutions;
}