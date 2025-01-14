import React, { useState } from 'react'

const Login = () => {

const [state, setState] = useState('sign up')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ name, setName ] = useState('')

  const onSubmitHandler = async (event) =>{
    event.preventDefault()
  }


  return (
    
     <form class="min-h-[80vh] flex items-center">
      <div class="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
    
    <p class="text-2xl font-semibold">{state === 'sign up' ? 'Create Account' : 'Login'}</p>
    
    <p>Please {state === 'sign up' ? 'sign up' : 'Login'} to book appointment</p>
    
    {
      state === 'sign up' && <div class="w-full ">
    
      <p>Full Name</p>
    
      <input onChange={(e)=>setName(e.target.name)} value={name} class="border border-[#DADADA] rounded w-full p-2 mt-1" type="text" required=""/>
    
      </div>
    }
    
      <div class="w-full ">
    
        <p>Email</p>
    
        <input onChange={(e)=>setEmail(e.target.email)} value={email} class="border border-[#DADADA] rounded w-full p-2 mt-1" type="email" required=""/>
    
        </div>
    
        <div class="w-full ">
    
          <p>Password</p>
    
          <input onChange={(e)=>setPassword(e.target.password)} value={password} class="border border-[#DADADA] rounded w-full p-2 mt-1" type="password" required=""/>
    
          </div>
    
          <button class="bg-primary text-white w-full py-2 my-2 rounded-md text-base">{state === 'sign up' ? 'Create Account' : 'Log in'}</button>
            {
              state === 'sign up'
              ?<p>Already have an account?<span onClick={()=>setState('Login')} class="text-primary underline cursor-pointer">Login here</span> </p>
              :<p>Create an new Acoount <span onClick={()=>setState('Sign up')} class="text-primary underline cursor-pointer">Click here</span></p>
            }
          
          </div>
    
          </form>
    
  )
}

export default Login
