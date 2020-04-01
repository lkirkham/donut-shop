import React from 'react';
import './App.css';
import db from './db.js'

import Banner from './components/Banner.js'

function App() {
  return (
    <div className="App">
      <Banner banner={db.banner}/>
    </div>
  );
}

export default App;
