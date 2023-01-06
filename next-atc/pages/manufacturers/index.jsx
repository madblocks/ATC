import IndexLayout from '../../components/index_layout'
import Head from 'next/head';
import Image from 'next/image'
import Client from '../../services/Client'
import { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'
import { FaEdit } from "react-icons/fa"
import { FiTrash2 } from "react-icons/fi"
import { useIndexContext } from "../../context/IndexContext"
import { UserProvider } from "../../context/UserContext"

export default function ManufacturerIndex () {

  const { manIndexUpdated, setManIndexUpdated, toolIndexUpdated, setToolIndexUpdated } = useIndexContext()

  const [ manufacturers, setManufacturers ] = useState([])
  const [ active, setActive ] = useState(null)

  const handleActive = (e, i) => {
    setActive(i);
  }

  useEffect(() => {
    const getManufacturers = async () => {
      const response = await Client.get("/manufacturers/")
      console.log(response.data)
      setManufacturers(response.data)
    }

    getManufacturers()
  },[manIndexUpdated])

  return manufacturers ? (
    <>
      <Head><title>Manufacturer Index</title></Head>
      <div className="text-white border-b-2 mx-28 mt-28 text-xl">Manufacturer Index</div>
      <div className="flex flex-col mx-28 mt-8 w-auto">
        {manufacturers.map((manufacturer, i) => (
          <Card key={i} id={i} className={"mb-4 border-4 box-border hover:border-green-400"
          + (active === i ? " border-green-400" : " border-transparent")}
            onClick={e => handleActive(e, i)}
          >
            <div className="flex items-center">
              <div className="text-xl font-bold w-1/2">{manufacturer.company_name}</div>
              <div className="w-1/2 flex justify-end">
                { manufacturer.logo ? 
                  <Image src={manufacturer.logo} alt="logo" width={100} height={100} /> : null
                }
              </div>
            </div>
            <div className="flex min-h-[40px]">
              <div className="w-5/6">
                {manufacturer.description}
              </div>
              <div className="w-1/6 flex justify-end items-end">
                { active === i &&
                  <div className="flex">
                    <FaEdit className="text-3xl hover:text-green-500"/>
                    <FiTrash2 className="text-3xl hover:text-red-500"/>
                  </div>
                }
                
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  ) : null
}

ManufacturerIndex.getLayout = (page) => {
  return (
    <UserProvider>
      <IndexLayout>{page}</IndexLayout>
    </UserProvider>
  )
}