/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

// Runtime: 128 ms, faster than 50.65% of JavaScript online submissions for Shift 2D Grid.
// Memory Usage: 47.3 MB, less than 77.92% of JavaScript online submissions for Shift 2D Grid.
const shiftGrid = (grid, k) => {
  const columnLength = grid.length;

  const newGrid = [];
  for (let i = 0; i < columnLength; i++) {
    newGrid[i] = [];
  }

  for (let y = 0; y < columnLength; y++) {
    const rowLength = grid[y].length;
    for (let x = 0; x < rowLength; x++) {
      const newPos = y * rowLength + (x % rowLength) + k;
      newGrid[Math.floor(newPos / rowLength) % columnLength][
        newPos % rowLength
      ] = grid[y][x];
    }
  }

  return newGrid;
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

// Runtime: 88 ms, faster than 89.61% of JavaScript online submissions for Shift 2D Grid.
// Memory Usage: 48.8 MB, less than 24.68% of JavaScript online submissions for Shift 2D Grid.
const shiftGridFlatten = (grid, k) => {
  const flatGrid = grid.flat();
  if (k % flatGrid.length === 0) {
    return grid;
  }
  const cutoff = flatGrid.length - (k % flatGrid.length);
  const shifted = [...flatGrid.slice(cutoff), ...flatGrid.slice(0, cutoff)];

  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      newGrid[i][j] = shifted[i * grid[i].length + (j % grid[i].length)];
    }
  }
  return newGrid;
};
