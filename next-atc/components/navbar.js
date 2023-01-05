import Link from 'next/link';
import Logo from '../public/svgs/plane-logo.svg'
import User from './user.js'
import { useUserContext } from "../context/UserContext"
import { Button } from 'flowbite-react'

export default function Navbar ({home}) {

  const { user } = useUserContext()

  return (
    <div className="flex bg-gray-700 h-16 items-center px-10">
      <div className="w-1/3 flex items-center">
        <Link href="/" className="flex items-center">
          <Logo className="text-5xl fill-green-500 inline-block"/>
          <div className="text-white pl-5 text-4xl font-poppins inline-block">ATC</div>
        </Link>
      </div>
      <div className="w-1/3 flex items-center">
        <Link href="/tools">Tools</Link>
        <Link href="/manufacturers">Manufacturers</Link>
      </div>
      <div className="w-1/3 flex justify-end items-center gap-5">
        {Boolean(user) ? null : 
          <Link href="/register">
            <Button gradientDuoTone="cyanToBlue">
              Sign Up
            </Button>
          </Link>
        }
        <User />
      </div>
    </div>
  )
}