
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
    if (matrix == null) return newArr;

  for (i=0; i<matrix.length; i++){
            let tempArr = [];
            tempArr.push(matrix[i]);
            if (i % 2 === 1) {
                tempArr = matrix[i].reverse();
            }
            newArr.push(tempArr);
        }
  return (newArr.flat(3));
}
