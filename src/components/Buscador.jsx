import React, { useState } from 'react';
import "./CustomBuscador.css"

function Buscador({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>    
      <input data-aos="fade-right" className='custominput'
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar Empleado..."
      />
    </div>
  );
}

export default Buscador;