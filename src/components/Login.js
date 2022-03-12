import React, { Component } from 'react';
import '../styles/Login.css'
import Q from '../images/queue-3.png'

export default class Login extends Component {
    render() {
        return <div>
            <div className='grid grid-cols-2 gap-4 justify-center items-center h-screen'>
                <section className='flex justify-center'>
                    <img src={Q} alt="Queue" className='w-1/2'/>
                </section>
                <section className=''>
                    <p>Simply Q.. here...</p>
                    <form action="" className='w-1/2'>
                        <input autoComplete='off' type="email" id='email' placeholder='Email Address' className='p-2 w-full mt-3 mb-3' />
                        <input type="password" id='password' placeholder='Password' className='p-2 w-full mt-3 mb-3' />
                        <a href="https://google.com" className="text-orange-700 my-4 mx-2">Forgot Password?</a>
                        <button className='bg-red-500 p-2 border-r-2 text-yellow-50 w-full'>Log In</button>
                    </form>
                </section>
                {/* <footer className='col-span-2 text-center b-t-1 ml-5 mr-5'>
                    Copyright &#64; {new Date().getFullYear()} QMS SDN BHD
                </footer> */}
            </div>
        </div>;
    }
}
