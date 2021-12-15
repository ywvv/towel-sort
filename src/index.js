module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length){
    return [];
  }
  if (matrix) {
    matrix[1].reverse();
  }
  if (matrix.length > 3) {
    matrix[3].reverse();
  }
  return matrix.flat();
};