import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
    

  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
    <hr />
    <div className='mt-4'>
        <span>Email</span>
        <br />
        <input type="email" {...register("email", { required: true })} className="outline-none input w-80" placeholder="Enter Your Email" />
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4'>
        <span>Pasword</span>
        <br />
        <input type="password" {...register("password", { required: true })} className="outline-none input w-80" placeholder="Enter Your Password" />
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Login Button */}
    <div className='flex justify-between mt-4'>
        <button className="bg-pink-500 text-white rounded-md px-5">Login</button>
        <p>Not Registered? 
            <Link to='/signup' className='underline text-blue-500 cursor-pointer'>
            SignUp
            </Link>
        </p>
    </div>
    </form>
    </div>
    </dialog>
    </div>
    </>
  )
}

export default Login