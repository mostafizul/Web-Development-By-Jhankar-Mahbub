import logo from './logo.svg';
import './App.css';       
import {useEffect, useState} from 'react';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
     {/*  <LoadPosts></LoadPosts>
      <District name="Dhaka"></District>
      <District name="rangamati"></District> */}
      <Comments></Comments>
    </div>
  );
}

/* function LoadPosts(){
  const [posts, setPost] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPost(data));
     
  },[])
   return(
     <div>
       <h1>Posts: {posts.length}</h1>
       {
         posts.map(post=><ShowPost title={post.title}></ShowPost>)
       }
     </div>
   )
}
function ShowPost(props){
  return(
    <div>
      <h2>Title:{props.title}</h2>
    </div>
  )
}
function District(props){
  const [power,setPower] = useState(1);
  const boostPower = () =>{
    const newPower = power*2;
    setPower(newPower);
  }
  const unBoostPower = () =>{
    const newPower = power-2;
    setPower(newPower);
  }
  return(
  <div>
    <h2>Name:{props.name}</h2>
    <h4>Power:{power}</h4>
    <button onClick={boostPower}>Boost</button>
    <button onClick={unBoostPower}>Unboost</button>
  </div>
  )
} */
export default App;
