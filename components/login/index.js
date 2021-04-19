import React, { useState } from 'react'
import styles from './styles.module.scss'

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
  }
  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async () => {
    const pushBody = {
      email: email,
      password: password,
    }
    try {
       const response = await fetch (`${process.env.SERVER_URL}/user/signin`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pushBody),
      })

      if(response.status === 201){
        userId = response.body.userId
        setLoggedIn(true)
        // document.cookie = `userId=${userId}; path=/`;
      }
    } catch(err) { console.log(err) }

  }

  // TODO take input and pass onto api endpoint
  // endpoint should redirect to fire page if successful 
  // optional: validate input string legth in the FE here
  return(
    <div >
      <input onChange={ handleEmailInput } placeholder={"mymail@mail.com"}/>
      <input onChange={ handlePasswordInput } placeholder={"supersecretpassword"}/>
      <button onClick={ handleSubmit }>Start Burning</button>
    </div>
  )
}

export default Login
