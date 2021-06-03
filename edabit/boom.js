function sevenBoom(arr) {
    let splitted_array = []
    console.log(typeof arr)
    let iteration = arr.map(item => {
        item = toString(item)
        console.log('Item: ',item)
        console.log('Item legth: ',item.length)
        if(item.length <= 1){
            splitted_array.push(parseInt(item))
        }
        else{
            console.log('item: ',item)
            for(let i = 0; i < item.length; i++){
                splitted_array.push(parseInt(i))
            }
        }
    })
    console.log(splitted_array)
	if(splitted_array.includes(7)){
		return ('Boom!')
	}
	else{
		return('there is no 7 in the array')
	}
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
// console.log(sevenBoom([8, 6, 33, 100]))
// console.log(sevenBoom([2, 55, 60, 97, 86]))