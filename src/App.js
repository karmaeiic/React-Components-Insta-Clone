/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
import dummydata from "./dummy-data";

const App = () => {
  const [data] = useState(dummydata);
  console.log(data)

  return (
    <div className="App">
      {}
    </div>
  );
};

export default App;

