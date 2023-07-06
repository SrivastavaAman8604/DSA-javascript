 class Queue{
    constructor(){
        this.item=[]
    }

    enqueue(element){
        return this.item.push(element)
    }

    dequeue(){
        return this.item.shift()
    }

    isEmpty(){
        return this.item.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }

    size(){
        return this.item.length
    }

    print(){
        console.log(this.item.toString())
    }
 }

 const queue = new Queue()
 console.log(queue.isEmpty())

 queue.enqueue(20)
 queue.enqueue(30)
 queue.enqueue(40)

 console.log(queue.size())
 queue.print()
 console.log(queue.dequeue())
 console.log(queue.peek())