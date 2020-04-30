import React from 'react';
import BeersProvider from './context'
import Cards from './components/cards'
import Header from './components/header'
function App() {
  return (
  <BeersProvider>
    <div>
      <Header/>
      <Cards/>
    </div>
  </BeersProvider>
  );
}

export default App;
