import React, { useContext } from 'react'
import thankyou from '../img/thankyou.gif'
import { SignUpContext } from '../contexts/SignUpContext'

const Checkout = () => {
  const { loggedinUser } = useContext(SignUpContext)
  return (
    <>
      {
        loggedinUser && <section className='flex flex-col justify-center items-center h-screen top-20 w-full text-center'>
        <img src={thankyou} alt='thankyou' className='h-[250px] my-3 md:h-[350px] mx-6' />
        <h2>See you again.</h2>
    </section>
      }
    </>
    
  )
}

export default Checkout