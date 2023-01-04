import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Dropdown } from "flowbite-react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ATC</title>
        <meta name="description" content="Antique Tool Collector" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      

      <Dropdown label="Dropdown button">
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
        
      </main>
    </>
  )
}
