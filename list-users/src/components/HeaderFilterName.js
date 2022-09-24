import React, { useContext, useEffect } from 'react';
import UsersContext from '../context/UsersContext';

export function HeaderFilterName() {
  const { setFilterByName, filterByName, originalData, setData } = useContext(UsersContext);

  useEffect(() => {
    setData(originalData.filter((p) => p.name.toLowerCase().includes(filterByName.toLowerCase())));
  }, [filterByName]);

  return (
    <header>
      <h1>Usuários Cadastrados</h1>
      <input
        placeholder="filtrar pelo nome"
        onChange={ ({ target }) => {
          setFilterByName(target.value);
        } }
      />
    </header>
  )
}