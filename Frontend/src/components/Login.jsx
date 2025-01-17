import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
function Login() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);

        const userInfo = {
            email: data.email,
            password: data.password
        }

        await axios.post('http://localhost:4001/user/login', userInfo).then((res) => {
            console.log(res.data);
            if (res.data) {
                toast.success('Successfully created!');
                console.log(res.data);

                localStorage.setItem('user', JSON.stringify(res.data.user))
                setTimeout(() => {
                    window.location.reload();
                }, 3000)
            }
        }).catch((err) => {
            console.log(err);

            toast.error('This is an error!');
        })

    }

    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal" onClick={closeModal}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <button type="button" className="btn btn-sm btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
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