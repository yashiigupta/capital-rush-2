import React, { useState } from 'react';
import chocoForm from '../assets/signup-choc.jpeg';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Sign up the user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        lastSignup: new Date().toISOString(),
      });

      alert("Signup successful!");
      navigate("/homepage");

    } catch (err) {
      alert(err.message);
    }
    return;
  };

  return (
    <div className='h-[75%] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex rounded-md items-center justify-center mx-auto p-4 sm:p-0 bg-[#A66D45]'>
      <img 
        src={chocoForm} 
        alt="chocolate" 
        className='h-48 sm:h-full w-full sm:w-1/2 object-cover hidden sm:block rounded-tl-md rounded-bl-md' 
      />
      <form 
        className='font-dm-sans flex flex-col p-4 sm:p-8 justify-center w-full sm:w-1/2 h-auto sm:h-full'
        onSubmit={handleSignup}
      >
        <h2 className='text-lg sm:text-2xl font-semibold mb-2 text-center sm:text-left'>
          Welcome to Le chocolat.
        </h2>
        <h2 className='text-md sm:text-xl font-medium mb-8 text-center sm:text-left'>
          Create an account
        </h2>
        <label className='text-sm sm:text-md font-medium mb-2 block'>Email</label>
        <input 
          type='email' 
          placeholder='Your Email' 
          className='border border-gray-300 p-2 w-full rounded-md mb-4 text-sm sm:text-base'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label className='text-sm sm:text-md font-medium mb-2 block'>Password</label>
        <input 
          type='password' 
          placeholder='Your Password'  
          className='border border-gray-300 p-2 w-full rounded-md mb-7 text-sm sm:text-base'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" className='rounded-lg p-2 bg-[#81624c] font-semibold text-sm sm:text-base mb-2'>
          Sign up
        </button>
        <Link to = "/login">
          <p>Already have an account? Log in here</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
