import React, { useState, useEffect, createContext, useCallback } from 'react'

export const SignUpContext = createContext()



const SignUpProvider = ({ children }) => {
    const [loggedinUser, setLoggedinUser] = useState(null)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [responseMessage, setResponseMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }



    const handleSubmit = async (e) => {
        // const url = 'https://fakestoreapi.com/auth/login'
        e.preventDefault()

        console.log(formData)

        setLoggedinUser(formData)
    }

    const logOut = useCallback( () => {
        setLoggedinUser(null)
    }, [])


  return (
    <SignUpContext.Provider value={{ formData, responseMessage, handleSubmit, handleChange, loggedinUser, logOut }} >
        {children}
    </SignUpContext.Provider>
  )
}

export default SignUpProvider