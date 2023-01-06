import { useState } from 'react'
import { Button, Modal, Label, TextInput, Textarea } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Client from '../services/Client'
import { useIndexContext } from "../context/IndexContext"
import { FaEdit } from "react-icons/fa"

export default function EditButton() {

  const router = useRouter()

  const { manIndexUpdated, setManIndexUpdated, toolIndexUpdated, setToolIndexUpdated } = useIndexContext()

  const [ showEditModal, setShowEditModal ] = useState(false)
  const [ formData, setFormData ] = useState({})
  const [ route, setRoute ] = useState()

  useEffect(()=> {
    let currentRoute = router.route.split('/')[1]
    setRoute(currentRoute)
  },[])

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  const handleEditModal = (e) => {

  }

  const handleEdit = async (e) =>  {
    e.preventDefault()
    try {
      const res = await Client.put(`${route}/${id}`) 
    } catch (error) {
      throw error
    }
    toggleEditModal()
    setManIndexUpdated(manIndexUpdated + 1)
    setToolIndexUpdated(toolIndexUpdated + 1)
  }

  return (
    <>
      <FaEdit className="text-3xl hover:text-green-500"></FaEdit>
      <Modal show={showEditModal} onClose={toggleEditModal}>
        <Modal.Header></Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  )
}