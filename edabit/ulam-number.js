function ulam(n) {
    let ul = [1,2];
    let iteration = 0;
    let nextValue = ul[ul.length-1] + 1;
    while( ul.length < n ){
        let count = 0;
        for(let i = 0; i <= ul.length - 2; i++){
            for(let j =  i+1; j <= ul.length -1; j++){
                if( ul[i] + ul[j] === nextValue){
                    count += 1;
                }
            }
        }
        if(count === 1){
            ul.push(nextValue);
            nextValue = ul[ul.length-1] + 1;
        }
        else{
            nextValue += 1;
        }
        iteration += 1;
    }
    return ul[n-1];
}

console.log(`Result for ulam(4) is ${ulam(4)}`);
console.log(`Result for ulam(9) is ${ulam(9)}`);
console.log(`Result for ulam(206) is ${ulam(206)}`);
