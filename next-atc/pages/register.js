import Head from 'next/head'
import Navbar from '../components/navbar'
import { useState } from "react"
import { Button, Label, TextInput } from 'flowbite-react'
import Client from '../services/client'
import { useRouter } from 'next/router'
import AlertMessage from '../components/alert'

export default function Register () {

  const router = useRouter();

  const [formData, setFormData] = useState({
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
  })

  const [successAlert, setSuccessAlert] = useState(false)

  const handleRegisterForm = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
        const res = await Client.post(`/users/create/`, formData)
        console.log(res)
        if (res.status === 201) {
          setSuccessAlert(true)
        }
        return res           
    } catch (error) {
        throw error
    } 
  }

  const dismissAlert = () => {
    setSuccessAlert(false)
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>
          Register
        </title>
      </Head>
      <Navbar home/>
      {successAlert ? 
        <AlertMessage status={'Success!'} message={'Please Log In.'} onDismiss={dismissAlert}/> : null
      }
      <div className="w-3/5 m-auto mt-20 max-w-xl">
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div className="row">
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="First Name" className="text-white"/>
            </div>
            <TextInput id="firstName" placeholder="John" name="first_name" value={formData.first_name} required={true} onChange={handleRegisterForm}/>
          </div>
          <div className="row">
            <div className="mb-2 block">
                <Label htmlFor="lastName" value="Last Name" className="text-white"/>
            </div>
            <TextInput id="lastName" placeholder="Doe" name="last_name" value={formData.last_name} required={true} onChange={handleRegisterForm}/>
          </div>
          <div className="row">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" className="text-white"/>
            </div>
            <TextInput id="username" placeholder="handPlaneAllDay65" name="username" value={formData.username} required={true} onChange={handleRegisterForm}/>
          </div>
          <div className="row">
            <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" className="text-white"/>
            </div>
            <TextInput id="email1" type="email" placeholder="email@example.com" name="email" value={formData.email} required={true} onChange={handleRegisterForm}/>
          </div>
          <div className="row">
            <div className="mb-2 block">
                <Label htmlFor="password" value="Password" className="text-white"/>
            </div>
            <TextInput id="password" type="password" name="password" value={formData.password} required={true} onChange={handleRegisterForm}/>
          </div>
          <div className="row max-w-xs">
            <Button type="submit" gradientDuoTone="cyanToBlue" >
                Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}