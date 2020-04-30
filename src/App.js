import React from 'react';
import BeersProvider from './context'
import Cards from './components/cards'
function App() {
  return (
  <BeersProvider>
    <div>
      <Cards/>
    </div>
  </BeersProvider>
  );
}

export default App;
