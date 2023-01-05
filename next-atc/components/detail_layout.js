import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar'
import CreateButton from './create_button'

export default function DetailLayout({children}) {
  return (
    <>
      <Navbar/>
      <CreateButton />
      {children}
    </>
  )
}