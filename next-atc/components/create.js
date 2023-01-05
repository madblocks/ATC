import { SlPlus } from "react-icons/sl";
import { Button, Modal, Label, TextInput, Textarea } from 'flowbite-react'

export default function Create({manufacturer}) {

  const [ showCreateModal, setShowCreateModal ] = useState(false)

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal)
    setFormData({})
  }

  const handleForm = () => {

  }

  return (
    <>
      <Button onClick={showCreateModal}>
        <SlPlus/>
      </Button>
      <Modal show={showCreateModal} onClose={toggleCreateModal}>
        <Modal.Header>
          Add {page}
        </Modal.Header>
        { manufacturer ?
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
                  <Label htmlFor="decription" value="description"/>
                </div>
                <Textarea id="decription" type="decription" required={true} name="decription" value={formData.decription} onChange={handleForm}/>
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
                <TextInput id="name" placeholder="Name" name="name" value={formData.name} required={true} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="decription" value="Description"/>
                </div>
                <Textarea id="decription" type="decription" required={true} name="decription" value={formData.decription} onChange={handleForm}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="img" value="Image"/>
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

