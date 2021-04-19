import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from "next/router"
import cookies from "next-cookies";

const Login = () => {
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        router.push("/")
      }
    } catch(err) { 
      console.log(err) 
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    router.push("/signup")
  }

  return (
    <div className="container">
      <Head>
        <title>FireList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <img className="bigLogo" src="../../firelogo.svg"/>

      <div className="productPitch">
        Welcome. Firelist structures my day into focused intervalls. Aiming for more deep work. Hope it can do the same for you.
      </div>
      <div className="centerthis">
        <form onSubmit={handleSubmit}>
          <label className="webflow-style-input">
            <input type="text" onChange={ handleEmailInput } placeholder={"mymail@mail.com"}/>
          </label>
          <label className="webflow-style-input">
            <input type="password" onChange={ handlePasswordInput } placeholder={"supersecretpassword"}/>
          </label>
          <input className="fireButton" type="submit" value="Login"/>
        </form>
      </div>

        <div className="secondaryCopy">
      Or create a new account for yourself 
      <button className="outlineButton" onClick={ handleSignUp }>Sign Up</button>
        </div>
      <footer>
        <p> Hope you could add some focus to your day with <span className="colorfire">FireList!  🔥 </span>
          Created by  <a className="linky" href="https://twitter.com/nikoatwork"> @nikoatwork </a></p>
      </footer>

    </div>
      )
      }

      export default Login
