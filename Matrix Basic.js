const matrix1 = [[2,4],[3,5]];
const matrix2 = [[4,2],[4,3]];

// add matrix 

function addMatrix(Matrix1, Matrix2) {
    const result = [];
    for(let  i = 0; i<Matrix1.length; i++){
        let row = [];
        for(let j=0; j<Matrix1[i].length; j++){
            row.push(Matrix1[i][j] + Matrix2[i][j]);
        }
        result.push(row); 
    }
    return result;
}

console.log(addMatrix(matrix1,matrix2));

// subtract matrices

function SubMatrix(Matrix1, Matrix2) {
    const result = [];
    for(let  i = 0; i<Matrix1.length; i++){
        let row = [];
        for(let j=0; j<Matrix1[i].length; j++){
            row.push(Matrix1[i][j] - Matrix2[i][j]);
        }
        result.push(row); 
    }
    return result;
}

console.log(SubMatrix(matrix1,matrix2));

//scaler multiplication of matrixes = [[1,0],[0,1]];

const MatrixSize = 3;
const ScalerNum = 4;

const scalerMulti = (scaler, size) => {
    let result = [];
    for(let i= 0; i < size ; i++){
        let row = [];
        for(let j=0; j < size ; j++){
            if( i === j){
                row.push(scaler);
            }else{
                row.push(0);
            }
        }
        result.push(row);
    }
    return result;
}

console.log(scalerMulti(MatrixSize,ScalerNum));

//Matrix Multiplication

const MatrixMulti = (matrix1, matrix2) => {
    let result = [];
    for(let i = 0; i< matrix1.length; i++){
        let row = [];
        for(let j = 0; j < matrix1[i].length; j++){
            row.push(matrix1[i][j] * matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

console.log(MatrixMulti(matrix1,matrix2));

//Determinent Of Matrix : Determinant = (a * d) - (b * c)
//formula : [[a , b, c], [e , f, g], [h, i, j]] = a*(f*j - g*i) - b*(e*j - g*h) + c*(e*i - f*h) : + a() - b() + c() - d() + e()

const matrix = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
  ];;

const deterMatrix = (matrix) => {
    if (matrix.length === 2 && matrix[0].length === 2) {
      const [a, b] = matrix[0];
      const [c, d] = matrix[1];
      return a * d - b * c;
    } else if (matrix.length === 3 && matrix[0].length === 3) {
      const [a, b, c] = matrix[0];
      const [d, e, f] = matrix[1];
      const [g, h, i] = matrix[2];
      let result = a * ((e * i) - (f * h)) - b * ((d * i) - (f * g)) + c * ((d * h) - (e * g));
      return result;
    } else {
      return null;
    }
  }

const det = deterMatrix(matrix);
console.log(det);

//Transpose of Matrix : Transpose_Matrix[i][j] = Original_Matrix[j][i] -  interchanging its rows with columns


const secMatrix = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
  ];;

const transMatrix = (matrix1) => {
    let transposeMatrix = [];
    for(let i = 0; i < matrix1.length; i++){
        let originalRow = [];
        for(let j = 0; j < matrix1[i].length; j++){
            originalRow.push(matrix[j][i]);
        }
        transposeMatrix.push(originalRow);
    }
    return transposeMatrix;
}

console.log(transMatrix(secMatrix));

