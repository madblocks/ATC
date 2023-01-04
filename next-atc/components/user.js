import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Dropdown, Modal, Button, Label, TextInput, Checkbox } from 'flowbite-react'
import { useUserContext } from "../context/UserContext"
import axios from 'axios'

export default function User () {

  const { user, setUser, setAuth, setTokens } = useUserContext()
  const [ formData, setFormData ] = useState({username: '', password: ''})
  const [ showLoginModal, setShowLoginModal ] = useState(false)

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal)
    setFormData({username: '', password: ''})
  }

  const handleLoginForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/token/', formData) 
      console.log(res.data)
      localStorage.setItem('token', res.data.access)
      localStorage.setItem('user', formData.username)
      setTokens(res.data)
      setAuth(true)
      setUser(formData.username) // Would be better to get a username from a custom token claim: https://django-rest-framework-simplejwt.readthedocs.io/en/latest/customizing_token_claims.html
      toggleLoginModal() // close modal
    } catch (error) {
      throw error
    }
  }

  const handleLogOut = () => {
    setUser(null)
    setAuth(false)
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <Dropdown className="w-[120px]" label={<FaUserCircle className="text-4xl fill-yellow-300"/>} arrowIcon={true} inline={true}>
        {Boolean(user) ? <Dropdown.Header>
          <span className="block text-sm">
            {user}
          </span>
        </Dropdown.Header> : null}
        <Dropdown.Item onClick={toggleLoginModal}>
          Sign In
        </Dropdown.Item>
        {/* <Dropdown.Item>
          Home
        </Dropdown.Item>
        */}
        <Dropdown.Item>
          Profile
        </Dropdown.Item> 
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogOut}>
          Sign out
        </Dropdown.Item>
      </Dropdown>

      <Modal show={showLoginModal} onClose={toggleLoginModal}>
      <Modal.Header>
        Login
      </Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your Username"/>
            </div>
            <TextInput id="username" type="username" placeholder="username" name="username" value={formData.username} required={true} onChange={handleLoginForm}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password"/>
            </div>
            <TextInput id="password1" type="password" required={true} name="password" value={formData.password} onChange={handleLoginForm}/>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Remember me
            </Label>
          </div>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  </div>
  )
}