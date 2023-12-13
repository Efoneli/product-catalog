import React from 'react'
import thankyou from '../img/thankyou.gif'

const Checkout = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen top-20 w-full text-center'>
        <img src={thankyou} alt='thankyou' className='h-[250px] my-3 md:h-[350px] mx-6' />
        <h2>See you again.</h2>
    </section>
  )
}

export default Checkout