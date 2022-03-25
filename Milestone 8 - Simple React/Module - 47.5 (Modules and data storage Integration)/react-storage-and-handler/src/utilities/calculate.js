const add = (first, second) =>{
    return first + second;
}

const multiply = (fisrt,second)=>{
    return fisrt*second;
}
const numbers = [20,24,345,212,89];
const sumReducer = (previous,current) => previous + current;
let total = numbers.reduce(sumReducer,0)
const items = [
    {id:1,name:'alta',price:100},
    {id:1,name:'alta',price:100},
    {id:1,name:'alta',price:100},
    {id:1,name:'alta',price:100},
]
const itemsSumReducer = (previous,current) => previous+current.price;
const itemTotal = items.reduce(itemsSumReducer,0);


export {add,multiply};