import Link from 'next/link';
import Logo from '../public/svgs/plane-logo.svg'
import { FaUser } from "react-icons/fa";

export default function Navbar ({home}) {
  return (
    <div className="flex bg-gray-700 h-16 items-center px-10">
      <div className="w-2/4 flex items-center">
        <Logo className="text-5xl fill-green-500"/>
        <div className="text-white pl-5 text-4xl font-poppins">ATC</div>
      </div>
      <div className="w-2/4 flex justify-end">
        <FaUser className="text-4xl fill-yellow-300"/>
      </div>
      
    </div>
  )
}