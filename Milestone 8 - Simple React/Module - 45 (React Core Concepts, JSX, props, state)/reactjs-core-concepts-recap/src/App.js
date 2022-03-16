import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'laptop',price:53000},
    {name:'Iphone',price:40000},
    {name:'watch',price:2000},
    {name:'tablet',price:10000},

]
  return (
    <div className="App">
      {
        products.map(product =><Product name={product.name} price={product.price}></Product>)
      }
     {/*  <Product name=" laptop" price="75000"></Product>
      <Product name=" Iphone" price="50000"></Product>
      <Product name=" watch" price="20000"></Product> */}
    </div>
  );
}

function Product(props){
  return(
    <div className='productname'>
      <h3>Name:{props.name} </h3>
      <p>Price: {props.price}</p>
    </div>

  )
}

export default App;
