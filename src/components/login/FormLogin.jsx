import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

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
    <form style={{marginTop: '80px'}} onSubmit={handleSubmit(submit)}>
        <h2>
            Welcome! Enter your email and password to continue
        </h2>
        <div>
            <label htmlFor="email">Email</label>
            <input 
            {...register('email')} 
            type="email" 
            id='email' 
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
            {...register('password')}  
            type="password" 
            id='password'
            />
        </div>
        <button>login</button>
    </form>
  )
}

export default FormLogin