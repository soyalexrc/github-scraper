import React, {useState} from 'react';
import { FaGithub } from 'react-icons/fa'
import '../styles/EntryPoint.css'
import { navigate } from "@reach/router";

const EntryPoint = () => {
  const defaultUser = 'alexrodriguez2498'
  const [user, setUser] = useState('');
  const handleInputChange = e => {
    sessionStorage.setItem('username', e.target.value)
    setUser(e.target.value)
  }
  const guestDefaultUser = () => {
    sessionStorage.setItem('username', defaultUser)
    navigate(`user/${defaultUser}`)
  }

  return (
    <div className={'entry-point'}>
      <div className='text-center'>
        <form
          onSubmit={e => {
            e.preventDefault();
            navigate(`user/${user}`)
          }}
        >
          <FaGithub size={100}/>
          <label htmlFor='username'>Find your Profile</label>
          <input name="username" type="text" onChange={handleInputChange}/>
        </form>

        <p className='divider'>Or</p>
        <button className='guest-button' onClick={guestDefaultUser}>
          <span>
            Are you a Guest?
          </span>
        </button>
      </div>
    </div>
  );
};

export default EntryPoint;
