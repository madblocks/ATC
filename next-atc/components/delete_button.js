import { useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Client from '../services/Client'
import { useIndexContext } from "../context/IndexContext"
import { FiTrash2 } from "react-icons/fi"

export default function DeleteButton({item}) {
  
  const router = useRouter()

  const { manIndexUpdated, setManIndexUpdated, toolIndexUpdated, setToolIndexUpdated } = useIndexContext()

  const [ showConfirmModal, setShowConfirmModal ] = useState(false)
  const [ id, setId ] = useState()
  const [ route, setRoute ] = useState()

  useEffect(()=> {
    let currentRoute = router.route.split('/')[1]
    setRoute(currentRoute)
    setId(item.id)
  },[])

  const toggleConfirmModal = () => {
    setShowConfirmModal(!showConfirmModal)
  }

  const handleDelete = async (e) =>  {
    e.preventDefault()
    try {
      const res = await Client.delete(`${route}/${item.id}`) 
    } catch (error) {
      throw error
    }
    toggleConfirmModal()
    setManIndexUpdated(manIndexUpdated + 1)
    setToolIndexUpdated(toolIndexUpdated + 1)
  }
  
  return (
    <>
      <FiTrash2 className="text-3xl hover:text-red-500" onClick={toggleConfirmModal}></FiTrash2>
      <Modal show={showConfirmModal} onClose={toggleConfirmModal}>
        <Modal.Header>Delete</Modal.Header>
        { route === 'manufacturers' ?
        <Modal.Body>
          <div>Confirm to <b>DELETE</b> manufacturer:    <b>{item.company_name}</b></div>
          <div className="flex mt-4 justify-center">
            <Button type="submit" color="failure" className="mx-4" onClick={toggleConfirmModal}>
                Cancel
            </Button>
            <Button type="submit" color="success" className="mx-4" onClick={handleDelete}>
                Delete
            </Button>
          </div>
        </Modal.Body> :
        <Modal.Body>
          <div>Confirm to <b>DELETE</b> tool:    <b>{item.name}</b></div>
          <div className="flex mt-4 justify-center">
            <Button type="submit" color="failure" className="mx-4" onClick={toggleConfirmModal}>
                Cancel
            </Button>
            <Button type="submit" color="success" className="mx-4" onClick={handleDelete}>
                Delete
            </Button>
          </div>
        </Modal.Body>
        }
      </Modal>
    </>
  )
}