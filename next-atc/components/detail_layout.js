import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

export default function DetailLayout({children}) {
  return (
    <>{children}</>
  )
}