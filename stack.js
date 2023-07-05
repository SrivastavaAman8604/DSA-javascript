class Stack{
    constructor(){
        this.item=[]
    }

    push(element){
        return this.item.push(element)
    }

    pop(){
        return this.item.pop()
    }

    peek(){
        return this.item[this.item.length - 1]
    }

    isEmpty(){
        return this.item.length === 0
    }

    size(){
        return this.item.length
    }

    print(){
        console.log(this.item.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(24)
stack.push(20)
stack.push(27)
stack.push(223)

console.log(stack.size())
stack.print()

console.log(stack.pop())
console.log(stack.peek())