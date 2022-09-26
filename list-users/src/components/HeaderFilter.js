import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import UsersContext from '../context/UsersContext';

export function HeaderFilter() {
  const { setFilterByName, filterByName, filterByStatus, seteFilterByStatus, originalData, setData } = useContext(UsersContext);

  useEffect(() => {
    console.log('primeiro');
    
    setData(originalData.filter((p) => p.name.toLowerCase().includes(filterByName.toLowerCase())));
    // setData(originalData.filter((p) => p.status.includes(filterByStatus)));
  }, [filterByName]);

  useEffect(() => {
    console.log('segundo');
    
    setData(originalData.filter((p) => p.status === filterByStatus));
  }, [filterByStatus]);


  return (
    <header>
      <h1>Usuários Cadastrados</h1>
      <input
        placeholder="filtrar pelo nome"
        onChange={ ({ target }) => {
          setFilterByName(target.value);
        } }
      />
      <select
            onChange={ ({ target }) => {
              seteFilterByStatus(target.value);
              } }
          >
            <option>Filtre pelo status</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
      <Link
        to="/register"
      >
        <button
          type="button"
        >
          Cadastrar Usuário
        </button>
      </Link>
    </header>
  )
}