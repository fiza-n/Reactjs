import React, {useContext,useState} from 'react'
import UserContext from '../context/UserContext'
 const Login = () => {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('')

    const {setUser} =useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        
            <label htmlFor="text">Username</label>
            <input type="text" id='text' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Email' />
            <br />
            <label htmlFor="pass">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' id="pass" />
            <br />
            <button type='submit' onClick={handleSubmit}>Login</button>
       
    </div>
  )
}

export default Login