/* const fruits = [{name:'pineapple'},{name:'mango'},{name:'papaya'}];
console.log(fruits[0].name);

const election = {
   razzak:1,
   alomgir:1,
   jashim:1,
   jayed:4
} */

let db = {};

const addToDb = item =>{
    //three ways to add a property to an object
    // db.alom = 1;
    // db['alom'] = 1;
    // db[item]=1;
    const storedTracker = localStorage.getItem("fruit");
    if(storedTracker){
        db = JSON.parse(storedTracker);
    }
    if(item in db){
        db[item] = db[item] + 1
    }else{
        db[item] = 1;
    }
    localStorage.setItem("fruit",JSON.stringify(db));
}