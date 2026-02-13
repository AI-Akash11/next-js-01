"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();
    const handnleBtn = () =>{
        const password = prompt("Enter your Password");
        if(password == "1234"){
            router.push("/dashboard")
        }

    }
    return (
        <div className='text-center space-y-5 bg-linear-60 from-sky-100 to-sky-300 p-10 text-black rounded'>
            <h2 className='text-4xl font-bold'>Welcome to dev story</h2>
            <button 
            onClick={handnleBtn}
            className='px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-black  duration-300'>Share-Story</button>
        </div>
    );
};

export default Banner;