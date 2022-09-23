import { useEffect, useState } from 'react';
import { usersAPI } from '../utils/requestApi';


export function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fecthUser = async () => {
      const data = await usersAPI()
      setUsers(data)
    }
    fecthUser()
  }, []);

  console.log(users);

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