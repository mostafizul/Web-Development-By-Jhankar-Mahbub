import logo from './logo.svg';
import './App.css';

const number = 555;
const singers = [
  {name: 'Dr. Mahfuz', job: 'singer1'},
  {name: 'Eva Rahman', job: 'singer2'},
  {name: 'Pink Floyd', job: 'David Gilmour'},
  {name: 'Iron Maiden', job: 'Bruce'},
]
const singer2 = {
}

function App() {
  const nayoks = ['siam',' brock',' aamir',' Tom Cruise']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer=><Person name={singer.name}></Person>)
      }

     {/*  <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <Person name={nayoks[2]}></Person> */}

      <h5>New Component</h5>
      <Friend name1="brock"></Friend>
      <Friend name1="aamir"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>  
      <h1>{props.name}</h1>
      <p></p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='friend'>
      <h3>{props.name1}</h3>
      <p>Job: Wrestler</p>
    </div>
  )
}
export default App;
