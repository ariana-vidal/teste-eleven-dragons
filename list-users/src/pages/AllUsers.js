import React, { useContext } from 'react';
import UsersContext from '../context/UsersContext';
import { HeaderFilter } from '../components/HeaderFilter';

export function AllUsers() {
  const { data } = useContext(UsersContext);
  return (
    <div>
      <HeaderFilter />
     {data.map(({ id, name, email, status }) => (
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