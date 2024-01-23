let mat1 = [[1, 2, 3], [4, 5, 6]];
let mat2 = [[1, 2, 3], [4, 5, 6]];

let result = new Array(mat1.length);
for (let k = 0; k < mat1.length; k++) {
  result[k] = new Array(mat2[0].length);
}

function matMultiply(mat1, mat2, result){
    if(mat1[0].length !== mat2.length){
        return "chal paj ja "
    }
    
    let i, j, k
    for (i = 0; i < mat1.length; i++) {
      for (j = 0; j < mat2[0].length; j++) {
        result[i][j] = 0
        for (k = 0; k < mat1[0].length; k++) {
          result[i][j] += mat1[i][k] * mat2[k][j];
        }
      }
    }
    
    return result;

}

let temp = matMultiply(mat1, mat2, result)
console.log(temp);