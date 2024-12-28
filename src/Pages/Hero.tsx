import { Coffee } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/coffee'); 
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-800">
    <button
    onClick={handleNavigate}
       className={`
         bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold 
         py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out 
         hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50
       `}
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
     >
       <span className="flex items-center justify-center">
       <Coffee />
         Buy me a coffee
       </span>
     </button>
 </div>
  )
}