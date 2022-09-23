import React, { useContext } from 'react';
import UsersContext from '../context/UsersContext';

export function AllUsers() {
  const { users } = useContext(UsersContext);
  return (
    <div>
      <span>Usuários cadastrados:</span>
     {users.map(({ id, name, email, status }) => (
       <section key={ id }>
         <section className="card">
            <span>{`name: ${name}`}</span>

            <span>{`email: ${email}`}</span>

            <span>{`status: ${status}`}</span>
         </section>
       </section>
     ))}
    </div>
  )
}