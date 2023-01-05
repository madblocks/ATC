import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar'
import Create from './create'

export default function DetailLayout({children}) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}