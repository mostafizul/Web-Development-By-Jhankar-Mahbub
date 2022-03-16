import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  /* const products = [
    {name:'laptop',price:53000},
    {name:'Iphone',price:40000},
    {name:'watch',price:2000},
    {name:'tablet',price:10000},

] */

  return (
    <div className="App">
       {/* <Counter></Counter> */}

       <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data));
  },[])
  return(
  <div>
    <h2>External Users</h2>
    <p>{users.length}</p>
    {
      users.map(user=><User name={user.name} email={user.email}></User>)
    }
  </div>

  )
}

function User(props){
  return(
    <div style={{border:'1px solid red',margin:'10px'}}>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count+1);
  const decreaseCount = () => setCount(count-1)
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/* function Product(props){
  return(
    <div className='productname'>
      <h3>Name:{props.name} </h3>
      <p>Price: {props.price}</p>
    </div>

  )
} */

export default App;

/* {
  products.map(product =><Product name={product.name} price={product.price}></Product>)
} */
{/*  <Product name=" laptop" price="75000"></Product>
<Product name=" Iphone" price="50000"></Product>
<Product name=" watch" price="20000"></Product> */}