import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/formLogin.css'

const FormLogin = () => {

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'

        axios.post(URL, data)
          .then(res => {
            localStorage.setItem('token', res.data.data.token)
          })
          .catch(err => console.log(err))
/*         reset({
            email: '',
            password: ''
        }) */
    }

    const { register, handleSubmit, reset } = useForm()

  return (

    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit(submit)}>
          <h2 className='login-title'>
              Welcome! Enter your email and password to continue
          </h2>
          <div className='login__email-container'>
              <label htmlFor="email">Email</label>
              <input 
              {...register('email')} 
              type="email" 
              id='email' 
              />
          </div>
          <div className='login__pass-container'>
              <label htmlFor="password">Password</label>
              <input 
              {...register('password')}  
              type="password" 
              id='password'
              />
          </div>
          <button className='login-btn'>login</button>
      </form>
    </div>
  )
}

export default FormLogin