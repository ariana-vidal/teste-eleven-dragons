import { Link } from 'react-router-dom';
import React, {useContext, useState, useEffect} from 'react'
import UsersContext from '../context/UsersContext';
import { newUsersAPI } from '../utils/requestPostApi';
import userValidation from '../utils/userValidation';

export default function Register() {
  const { refresh, setRefresh } = useContext(UsersContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [disbled, setDisabled] = useState(false);

    const postUser = async (event) => {
      event.preventDefault();
      const newUser = {
        name: name,
        email: email,
        status: status,
        gender: gender,
      }

     await newUsersAPI(newUser)
      setRefresh(!refresh);
    }

    useEffect(() => {
      const result = userValidation(name, email);
      if (result) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }, [name, email]);
  
     
    return (
      <div className="register">
        <h1>Cadastre um novo usuário:</h1>
        <form>
          <input
            className="inputs"
            type="text"
            placeholder="Digite seu nome completo"
            onChange={ ({ target }) => {
              setName(target.value);
              } }
          />
          <input
            className="inputs"
            type="email"
            placeholder="Digite seu melhor email"
            onChange={ ({ target }) => {
              setEmail(target.value);
            } }
          />
          <select
            className="inputs"
            onChange={ ({ target }) => {
              setGender(target.value);
              } }
          >
            <option>selecione</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>

          
          <select
            className="inputs"
            onChange={ ({ target }) => {
              setStatus(target.value);
              } }
          >
            <option>selecione</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>

          <button
            className="inputs"
            disabled={ disbled }
            onClick={postUser}
          >
            Cadastrar
          </button>

          <Link
          to="/"
        >
          <button
            className="inputs"
            type="button"
          >
            Ver Usuários Cadastrados
          </button>
        </Link>
        
        </form>
      </div>
    )
}
