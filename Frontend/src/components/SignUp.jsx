import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function SignUp() {

        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()
          const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div id="my_modal_4" className="border-[2px] shadow-md p-5 rounded-lg">
                    <div className="">
                        <form method="" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <div className='flex justify-between'>
                            <h3 className="font-bold text-lg">Signup</h3>
                            <Link to='/' className='text-blue-500 cursor-pointer'>
                                ✕
                            </Link>
                            </div>
                            <hr />
                            <div className='mt-4'>
                                <span>Name</span>
                                <br />
                                <input type="text" {...register("name", { required: true })} className="outline-none input w-80" placeholder="Enter Your Name" />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
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
                                <button className="bg-pink-500 text-white rounded-md px-5">Signup</button>
                                <p>Already A User?
                                    <span onClick={()=>document.getElementById('my_modal_3').showModal()} className='underline text-blue-500 cursor-pointer'>
                                        Login
                                    </span>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp