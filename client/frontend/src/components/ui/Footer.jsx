import React from 'react'
import { useThemeStore } from '../../store/useThemeStore';

function Footer() {
  const {theme}=useThemeStore()
  return (
    <footer className={` text-center text-gray-300 py-8 w-full  ${theme=="light" ?'bg-gray-800' :'bg-[#1A1A1A]'} `}>
      <p className="text-sm">
        &copy; 2025 FoodPlus. All rights reserved.
      </p> 
    </footer>
  );
}



export default Footer