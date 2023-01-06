import { useState } from 'react'
import { Button, Modal, Label, TextInput, Textarea } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Client from '../services/Client'
import { useIndexContext } from "../context/IndexContext"
import { FiTrash2 } from "react-icons/fi"

export default function DeleteButton() {
  
  const router = useRouter()

  const { manIndexUpdated, setManIndexUpdated, toolIndexUpdated, setToolIndexUpdated } = useIndexContext()

  const [ showConfirmModal, setShowConfirmModal ] = useState(false)
  const [ route, setRoute ] = useState()

  useEffect(()=> {
    console.log(router.route.split('/')[1])
    let currentRoute = router.route.split('/')[1]
    setRoute(currentRoute)
  },[])
  
  return (
    <FiTrash2 className="text-3xl hover:text-red-500"></FiTrash2>
  )
}