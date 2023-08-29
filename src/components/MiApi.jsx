import React, { useState, useEffect } from 'react';
import "./MiApiCustom.css"

function MiApi({ searchTerm }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredAndSortedUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h2 input data-aos="fade-left">Lista de Usuarios</h2>
      <ul input data-aos="fade-right" className='customul'>
        {filteredAndSortedUsers.map(user => (
          <li className='customli' key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MiApi;
