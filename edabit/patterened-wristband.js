isWristband = (arr) => {

    checkRow = () => {
        for(let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length - 1; j++) {
                // console.log(`i: ${i} j: ${j}    i: ${i} j+1: ${j + 1}`);
                if (arr[i][j] !== arr[i][j + 1]) {
                    return false;
                }
            }
        }
        return true;
    };

    checkColumn = () => {
        for(let i = 0; i < arr.length - 1; i++) {
            for(let k = 0; k < arr.length - 1; k++) {
                // console.log(`k: ${k} i: ${i}    k+1: ${k + 1} i: ${i}`);
                if(arr[k][i] !== arr[k + 1][i]) {
                    return false;
                }
            }
        }
        return true;
    };

    checkLeftDiagnol = () => {
        for(let i = 0; i<arr.length; i++){
            for(let j=0; j<arr[i]. length; j++){
                if(i+1<arr.length && j+1<arr[0]. length && arr[i][j] !== arr[i+1][j+1]){
                    return false;
                }
            }
        }
        return true;
    };

    checkRightDiagnol = () => {
        for(let i = 0; i<arr.length; i++){
            for(let j=0; j<arr[i]. length; j++){
                if(i-1>=0 && j+1<arr[0].length && arr[i][j] !== arr[i-1][j+1]){
                    return false;
                }
            }
        }
        return true;
    };

    console.log(`checkRow(): ${checkRow()}`);
    console.log(`checkColumn(): ${checkColumn()}`);
    console.log(`checkLeftDiagnol(): ${checkLeftDiagnol()}`);
    console.log(`checkRightDiagnol(): ${checkRightDiagnol()}`);
    return checkRow() || checkColumn() || checkLeftDiagnol() || checkRightDiagnol();
};

console.log(isWristband([
    ["A", "A"],
    ["B", "B"],
    ["C", "C"]
]));
// Part of horizontal wristband.

console.log(isWristband([
    ["A", "B"],
    ["A", "B"],
    ["A", "B"]
]));
// Part of vertical wristband.

console.log(isWristband([
    ["A", "B", "C"],
    ["C", "A", "B"],
    ["B", "C", "A"],
    ["A", "B", "C"]
]));
// Part of diagonal left wristband.

console.log(isWristband([
    ["A", "B", "C"],
    ["B", "C", "A"],
    ["C", "A", "B"],
    ["A", "B", "A"]
]));
// Part of diagonal right wristband.