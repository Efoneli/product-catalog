import React, { useContext, useEffect } from 'react'
import { SignUpContext } from './contexts/SignUpContext'
import { useNavigate } from "react-router-dom";


const Layouts = ({ children }) => {

    const {loggedinUser } = useContext(SignUpContext)

    const navigate = useNavigate();

    useEffect(() => {
        
        if(loggedinUser !== null) {
          navigate('/')
        } else {
            navigate('/signup')
        }
      }, [loggedinUser, navigate])

  return (
    <div>
        {children}
    </div>
  )
}

export default Layouts