import React, { useState } from 'react';
import Buscador from './components/Buscador';
import MiApi from './components/MiApi';
import "./App.css"

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <div className="container">
      <div className="containerwork">
    <div>
      <h1 data-aos="fade-in">Potencia Épica S.A.</h1>
      <Buscador onSearch={handleSearch} />
      <p data-aos="fade-left">Resultados para: {searchTerm}</p>
      <MiApi searchTerm={searchTerm} />
    </div>
    </div>
    </div>
  );
}
export default App;