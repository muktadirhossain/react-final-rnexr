import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AUTH_KEY } from '../constants/constants'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const { auth, setAuth } = useAuth()

    const loginHandler = async (formData) => {
        // console.log(formData)

        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, {
                email: formData?.username,
                password: formData?.password
            })
            // console.log(res.data)
            const user = { ...res?.data?.user }
            const { token, refreshToken } = res.data?.token
            setAuth({ user: user, accessToken: token, refreshToken })
            // Save User Data to local storage
            localStorage.setItem(AUTH_KEY, JSON.stringify({ user: user, accessToken: token, refreshToken }))
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='bg-slate-900 min-h-screen flex justify-start items-center'>
            <form
                onSubmit={handleSubmit(loginHandler)}
                className='flex flex-col items-center gap-3 border p-5 rounded-lg mx-auto'>
                <h3 className='font-bold text-violet-400 text-4xl mb-3'>Login Form</h3>
                <div>
                    <input
                        {...register('username', { required: "User name is required" })}
                        type="text" placeholder="Username" className='w-96 bg-slate-700 px-5 py-2.5 rounded-md text-white' />
                </div>
                {!!errors?.username && <p role="alert" className='text-left text-red-600'>{errors?.username?.message}</p>}

                <div>
                    <input {...register('password', { required: "Password is required!" })} type="password" placeholder="Password" className='w-96 bg-slate-700 px-5 py-2.5 rounded-md text-white' />

                </div>
                {!!errors?.password && <span role="alert" className='text-left text-red-600'>{errors?.password?.message}</span>}
                <button type="submit" className='bg-violet-500 py-2 px-5 rounded-md'>Login</button>
                <Link to='/dashboard' >Dashboard</Link>
            </form>

        </div>
    )
}

export default Login