
import './App.css';
import React, {useEffect,useState} from 'react';


function Demo() {

  const [data,setData] = useState([]);

  useEffect(() => {

    fetch('/')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log('Error in fetching dara:', err));

  }, []);
  return (
    <div className='App'>
      <h1>
        Full stack developmet
      </h1>
      <h2>
        welcome to the platform
      </h2>
      <button onClick={handleClick}>Click me</button>
      <ul>
        {data.map(item =>(
          <li key = { item.id}>{item.name}</li>

        ))}
        
      </ul>
    </div>

    
  
  );
} 
export default Demo;

function handleClick(){
  alert('you clicked me')

}