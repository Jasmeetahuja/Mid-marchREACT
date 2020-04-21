import React, {useState} from 'react';
import CityList from './citydisplay';

function App() {

  const [city] =useState('London');
  const [population, setPopulation] = useState(0)

  return (
    <div>
      <h1>React Hooks</h1>
     <CityList cityname = {city} />
     <h2>
       Pop: {population}
     </h2>
     <button onClick={() => {setPopulation(population + 1)}}></button>
    </div>
  )
}
  

export default App;
