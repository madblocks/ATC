import { useState } from 'react'
import { SlPlus } from "react-icons/sl";
import { Button, Modal, Label, TextInput, Textarea } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CreateButton() {

  const router = useRouter()

  const [ showCreateModal, setShowCreateModal ] = useState(false)
  const [ formData, setFormData ] = useState({})
  const [ route, setRoute ] = useState()

  useEffect(()=> {
    console.log(router.route.split('/')[1])
    setRoute(router.route.split('/')[1])
  },[])

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal)
    setFormData({})
  }

  const handleForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <>
      <SlPlus className="fill-yellow-300 absolute top-20 right-14 text-4xl hover:fill-green-500" onClick={toggleCreateModal}/>
      <Modal show={showCreateModal} onClose={toggleCreateModal}>
        <Modal.Header>
          Add {route}
        </Modal.Header>
        { route === 'manufacturers' ? 
          <Modal.Body>
            <form className="flex flex-col gap-4" onSubmit={handleForm}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="companyName" value="Company Name"/>
                </div>
                <TextInput id="companyName" placeholder="Company Name" name="company_name" value={formData.company_name} required={true} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="decription" value="Description"/>
                </div>
                <Textarea id="decription" required={true} name="decription" value={formData.decription} onChange={handleForm}/>
              </div>
              <Button type="submit" gradientDuoTone="cyanToBlue">
                Create
              </Button>
            </form>
          </Modal.Body> :
          <Modal.Body>
            <form className="flex flex-col gap-4" onSubmit={handleForm}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name"/>
                </div>
                <TextInput id="name" name="name" value={formData.name} required={true} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="decription" value="Description"/>
                </div>
                <Textarea id="decription" type="decription" required={true} name="decription" value={formData.decription} onChange={handleForm}/>
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
  )
}

