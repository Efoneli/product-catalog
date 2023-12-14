import React, { useContext, useEffect } from 'react'
import { SignUpContext } from './contexts/SignUpContext'
import { useNavigate, useLocation  } from "react-router-dom";


const Layouts = ({ children }) => {

    const {loggedinUser } = useContext(SignUpContext)

    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
      if(loggedinUser === null){
        navigate("/signup")
      } else {
        if(location.pathname.includes("/signup")){
          navigate("/")
        }
      }
      }, [loggedinUser, navigate, location])

  return (
    <div>
        {children}
    </div>
  )
}

export default Layouts