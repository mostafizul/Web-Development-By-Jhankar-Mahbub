import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = {
  name: 'Dr. Mahfuz', job: 'singer'
}
const singer2 = {
  name: 'Eva Rahman', job: 'singer'
}
const singerStyle = {
  color: 'black',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Component</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>  
      <h1>siam</h1>
      <p>bkash</p>
    </div>
  )
}

function Friend(){
  return(
    <div className='friend'>
      <h3>Name: Brock Lesnar</h3>
      <p>Job: Wrestler</p>
    </div>
  )
}
export default App;
