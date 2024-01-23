let mat3 = [[7, 8, 9], [10, 11, 12]];
let mat4 = [[1, 2, 3], [4, 5, 6]];


function matAddition(mat1, mat2) {
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
        return "yeah no shit sherlock";
    }

    let result = new Array(mat1.length);
    for (let i = 0; i < mat1.length; i++) {
        result[i] = new Array(mat1[0].length);
        for (let j = 0; j < mat1[0].length; j++) {
            result[i][j] = mat1[i][j] + mat2[i][j];
        }
    }

    return result;
}

let additionResult = matAddition(mat3, mat4);
console.log(additionResult);


// matrix subtraction

function matSubtraction(mat1, mat2) {
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
        return "yeah no shit sherlock";
    }

    let result = new Array(mat1.length);
    for (let i = 0; i < mat1.length; i++) {
        result[i] = new Array(mat1[0].length);
        for (let j = 0; j < mat1[0].length; j++) {
            result[i][j] = mat1[i][j] - mat2[i][j];
        }
    }

    return result;
}


let subtraction = matSubtraction(mat3, mat4);
console.log(subtraction);