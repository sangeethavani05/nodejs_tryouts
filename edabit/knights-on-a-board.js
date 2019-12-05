function cannotCapture(chessBoard){
    for( let i = 0; i < 8; i++){
        for( let j = 0; j < 8; j++){
            if(chessBoard[i][j] === 1){
                if(i-1 >= 0){
                    if(j-2 >= 0){
                        if(chessBoard[i-1][j-2] === 1){
                            return false;
                        }
                    }
                    if(j+2 < 8){
                        if(chessBoard[i-1][j+2] === 1 ){
                            return false;
                        }
                    }
                }
                if(i-2 > 0){
                    if(j-1 > 0){
                        if(chessBoard[i-2][j-1] === 1){
                            return false;
                        }
                    }
                    if(j+1 < 8){
                        if(chessBoard[i-2][j+1] === 1){
                            return false;
                        }
                    }
                }
                if(j-1 > 0 && i+2 < 8 && chessBoard[i+2][j-1] === 1){
                    return false;
                }
                if(j-2 > 0 && i+1 < 8 && chessBoard[i+1][j-2] === 1){
                    return false;
                }
                if(i+1 < 8 && j+2 < 8 && chessBoard[i+1][j+2] === 1){
                    return false;
                }
                if(i+2 < 8 && j+1 < 8 && chessBoard[i+2][j+1] === 1 ){
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(cannotCapture([
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0]
]));

console.log(cannotCapture([
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 1]
]));