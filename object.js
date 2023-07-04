const obj = {
    name: 'Aman',
    age: '24',
    "key-three": true,
    myName: function(){
        console.log(this.name)
    }
}
obj.hobby = "music"
console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj['age'])
console.log(obj['key-three'])
delete obj.hobby
console.log(obj)
obj.myName()

//Object.keys() .values() .entries()