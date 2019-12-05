// for(var i = 1; i < 5; i++) {
//     // setTimeout(function() {
//         console.log('Value of i with var : ' + i);
//     // },8000);
// }
//
// for(let i = 1; i < 5; i++) {
//     // setTimeout(function() {
//         console.log('Value of i with let : ' + i);
//     // },10000);
// }

const shape = {
        radius: 10,
        diameter() {
                console.log(this);
                return this.radius * 2;
        },
        perimeter(){
                console.log(this);
                return 2 * Math.PI * this.r;
        }
}
console.log(shape.diameter());
console.log(shape.perimeter);