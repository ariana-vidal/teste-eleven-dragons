import axios from 'axios';

export const newUsersAPI = async (newUser) => {

  await axios.post('https://gorest.co.in/public/v2/users', {...newUser}, {
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer 56147de6fb55c65372347f239b162d29848de4607155455c4959b890583367e3'
    },
  });
  };