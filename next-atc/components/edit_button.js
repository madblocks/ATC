import { useState } from 'react'
import { Button, Modal, Label, TextInput, Textarea } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Client from '../services/client'
import { useIndexContext } from "../context/IndexContext"
import { FaEdit } from "react-icons/fa"
import AlertMessage from './alert'

export default function EditButton({item}) {

  const router = useRouter()

  const { manIndexUpdated, setManIndexUpdated, toolIndexUpdated, setToolIndexUpdated } = useIndexContext()

  const [ showEditModal, setShowEditModal ] = useState(false)
  const [ formData, setFormData ] = useState({})
  const [ route, setRoute ] = useState()
  const [ alert, setAlert ] = useState({
    status: '',
    message: ''
  })

  useEffect(()=> {
    let currentRoute = router.route.split('/')[1]
    setRoute(currentRoute)
    setFormData({...item})
  },[])

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  const handleForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleEdit = async (e) =>  {
    e.preventDefault()
    try {
      const res = await Client.put(`${route}/${item.id}`, formData)
    } catch (error) {
      //throw error
      handleAlert('Failure', 'failure', '  You must be logged in to perform this action.')
    }
    toggleEditModal()
    setManIndexUpdated(manIndexUpdated + 1)
    setToolIndexUpdated(toolIndexUpdated + 1)
  }

  const handleAlert = (status, color, message) => {
    setAlert({...alert, status: status, color: color, message: message })
  }

  const dismissAlert = () => {
    setAlert(false)
  }

  return formData ? (
    <>
      <FaEdit className="text-3xl hover:text-green-500" onClick={toggleEditModal}></FaEdit>
      <Modal show={showEditModal} onClose={toggleEditModal}>
        <Modal.Header>
          Edit {route}
        </Modal.Header>
        { route === 'manufacturers' ? 
          <Modal.Body>
            <form className="flex flex-col gap-4" onSubmit={handleEdit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="company_name" value="Company Name"/>
                </div>
                <TextInput id="company_name" placeholder="Company Name" name="company_name" value={formData.company_name} required={true} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description"/>
                </div>
                <Textarea id="description" required={true} name="description" value={formData.description} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="logo" value="Logo URL"/>
                </div>
                <TextInput id="logo" placeholder="Logo URL" name="logo" value={formData.logo} onChange={handleForm}/>
              </div>
              <div></div>
              <Button type="submit" gradientDuoTone="cyanToBlue">
                Edit
              </Button>
            </form>
          </Modal.Body> :
          <Modal.Body>
            <form className="flex flex-col gap-4" onSubmit={handleEdit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name"/>
                </div>
                <TextInput id="name" name="name" value={formData.name} required={true} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description"/>
                </div>
                <Textarea id="description" type="description" required={true} name="description" value={formData.description} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="img" value="Image URL"/>
                </div>
                <TextInput id="img" required={true} name="img" value={formData.img} onChange={handleForm}/>
              </div>
              <Button type="submit" gradientDuoTone="cyanToBlue">
                Edit
              </Button>
            </form>
          </Modal.Body> }
      </Modal>
      {alert.status ? <Modal show={alert.status}><AlertMessage className="absolute w-full top-50" status={alert.status} message={alert.message} onDismiss={dismissAlert}/>
        </Modal> : null }
    </>
  ) : null
}