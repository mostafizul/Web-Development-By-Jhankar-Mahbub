//JavaScript Object Notation
//JSON
const user = {id:11,name:'siam',job:'actor'}
const stringified = JSON.stringify(user);
console.log(stringified);
console.log(user);

const shop = {
    name:'aliyastore',
    address:'Ranbir Road',
    profir: 10000,
    products:['laptop', 'mobile','pepsi'],
    owner:{
        name:'siam',
        age:27
    },
    isExpensive:false
}
const shopStringfied = JSON.stringify(shop);
console.log(shopStringfied);
const converter = JSON.parse(shopStringfied);
console.log(converter);
