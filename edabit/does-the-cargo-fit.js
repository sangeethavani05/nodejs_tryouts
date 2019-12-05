function willFit(holds, cargo) {
    const totalCargo = cargo.reduce((acc,current) => acc+current);
    console.log(`totalCargo ${totalCargo}`);
    const totalHolds = holds.reduce((acc,current) => {
        let value = 0;
        if(current === 'S'){
            value = 50;
        }
        else if(current === 'M'){
            value = 100;
        }
        else{
            value = 200;
        }
        console.log(`value ${value}`);
        return acc+value;
    },0);
    console.log(`totalHolds ${totalHolds}`);
    return totalCargo < totalHolds;
}

console.log(willFit(["M", "L", "L", "M"], [56, 62, 84, 90]));

console.log(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]));

console.log(willFit(["L", "L", "M"], [56, 62, 84, 90]));