import { puppyList } from './data.js'
import './App.css'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Find the featured puppy based on featPupId
  const featuredPup = puppies.find(puppy => puppy.id === featPupId);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        const isPuppyActive = puppy.id === featPupId;

        return (
          <div
            onClick={() => handleClick(puppy.id)}
            key={puppy.id}
            className={`puppy-container ${isPuppyActive ? 'active' : ''}`}
          >
            <p>{puppy.name}</p>
            {isPuppyActive && (
              <div className="details-container">
                <h2>{featuredPup.name}</h2>
                <ul>
                  <li>Age: {featuredPup.age}</li>
                  <li>Email: {featuredPup.email}</li>
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
