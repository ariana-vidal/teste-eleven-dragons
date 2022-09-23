import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UsersContext from './UsersContext';
import { usersAPI } from '../utils/requestApi';

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fecthUser = async () => {
      const data = await usersAPI()
      setUsers(data)
    }
    fecthUser()

  }, []);

  console.log('user provider:', users);

  return (
    <UsersContext.Provider
      value={ {
        users,
        setUsers,
      } }
    >
      { children }
    </UsersContext.Provider>
  )
  
}

UsersProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

