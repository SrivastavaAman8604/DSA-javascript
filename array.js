const arr = [1,2,4,'Aman']
arr.push(6)
console.log(arr)

arr.unshift(8)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

for(let item of arr){
    console.log(item)
}
