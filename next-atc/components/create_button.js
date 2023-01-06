import { useState } from 'react'
import { SlPlus } from "react-icons/sl";
import { Button, Modal, Label, TextInput, Textarea } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Client from '../services/Client'
import { useIndexContext } from "../context/IndexContext"

export default function CreateButton() {

  const router = useRouter()

  const { manIndexUpdated, setManIndexUpdated, toolIndexUpdated, setToolIndexUpdated } = useIndexContext()

  const [ showCreateModal, setShowCreateModal ] = useState(false)
  const [ formData, setFormData ] = useState({})
  const [ route, setRoute ] = useState()

  useEffect(()=> {
    let currentRoute = router.route.split('/')[1]
    setRoute(currentRoute)
  },[])

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal)
    setFormData({})
  }

  const handleForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`${route}/`, formData) 
      console.log(formData)
      console.log(res.data)
      // toggleCreateModal()
    } catch (error) {
      throw error
    }
    toggleCreateModal()
    setManIndexUpdated(manIndexUpdated + 1)
    setToolIndexUpdated(toolIndexUpdated + 1)
  }

  return formData ? (
    
    <>
      <SlPlus className="fill-yellow-300 fixed top-20 right-14 text-4xl hover:fill-green-500" onClick={toggleCreateModal}/>
      <Modal show={showCreateModal} onClose={toggleCreateModal}>
        <Modal.Header>
          Add {route}
        </Modal.Header>
        { route === 'manufacturers' ? 
          <Modal.Body>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                Create
              </Button>
            </form>
          </Modal.Body> :
          <Modal.Body>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                Create
              </Button>
            </form>
          </Modal.Body> }
      </Modal>
    </>
    
  ) : null
}

