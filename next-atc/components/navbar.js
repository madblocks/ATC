import Link from 'next/link';
import Logo from '../public/svgs/plane-logo.svg'
import User from './user.js'
import { useUserContext } from "../context/UserContext"
import { Button } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Navbar ({home}) {

  const router = useRouter()
  const { user } = useUserContext()
  const [ route, setRoute ] = useState()

  useEffect(() => {
    setRoute(router.route.split('/')[1])
  },[])

  return (
    <div className="flex bg-gray-700 h-16 items-center px-10 w-full top-0 fixed z-50">
      <div className="w-3/5 flex items-center">
        <Link href="/" className="flex items-center">
          <Logo className="text-5xl fill-green-500 inline-block"/>
          <div className="text-white pl-5 text-4xl font-poppins inline-block">ATC</div>
        </Link>
        <div className="ml-10 h-10 w-1 bg-yellow-300"></div>
        <Link href="/tools" className={"text-white ml-10 mr-4 box-border border-b-2 hover:border-b-2 hover:border-white"
          + (route === 'tools' ? " border-b-2" : " border-transparent")}>Tools
        </Link>
        <Link href="/manufacturers" className={"text-white box-border border-b-2 hover:border-b-2 hover:border-white"
          + (route === 'manufacturers' ? " border-b-2" : " border-transparent")}>Manufacturers
        </Link>
      </div>
      <div className="w-2/5 flex justify-end items-center gap-5">
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