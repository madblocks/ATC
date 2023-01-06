import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar'
import CreateButton from './create_button'
import { IndexProvider } from "../context/IndexContext"

export default function IndexLayout({children}) {
  return (
    <IndexProvider>
      <Navbar/>
      <CreateButton />
      {children}
    </IndexProvider>
  )
}