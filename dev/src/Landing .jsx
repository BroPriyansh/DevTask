import React from 'react'
import { useNavigate } from 'react-router-dom';



function Landing () {

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-80 rounded-xl shadow-md p-6 text-center">
        <h1 className="text-xl font-semibold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="w-full mt-3 bg-purple-100 text-purple-700 py-2 rounded-md font-semibold hover:bg-purple-200 transition" onClick={() => navigate('/login')}>
        Already Registered? Login
        </button>

      </div>
    </div>
  )
}

export default Landing 
