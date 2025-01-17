import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()

    const handelLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("user")
            toast.success("Loggedout Successfully")
            
            setTimeout(() => {
                window.location.reload();
            }, 3000)
        } catch (error) {
            toast.error("Loggedout Successfully")
        }
    }

  return (
    <div>
        <button onClick={handelLogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout