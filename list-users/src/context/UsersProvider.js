import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UsersContext from './UsersContext';
import { usersAPI } from '../utils/requestApi';

export function UsersProvider({ children }) {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fecthUser = async () => {
      const dataUsers = await usersAPI()
      setOriginalData(dataUsers)
      setData(dataUsers)
    }
    fecthUser()

  }, [refresh]);


  return (
    <UsersContext.Provider
      value={ {
        originalData,
        setOriginalData,
        filterByName,
        setFilterByName,
        data,
        setData,
        refresh,
        setRefresh
      } }
    >
      { children }
    </UsersContext.Provider>
  )
  
}

UsersProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

