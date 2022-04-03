import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Charts from './components/Charts/Charts';
import SpecialChart from './components/SpecialChart/SpecialChart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-6xl font-bold underline">
      Hello world!
    </h1>
    <Pricing></Pricing>
    <div>
      <Charts></Charts>
      <SpecialChart></SpecialChart>
    </div>
    </div>
  );
}

export default App;
