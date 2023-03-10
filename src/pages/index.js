import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from './components/Hero'
import Header from './components/Header'
import Skills from './components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
    </main>
  )
}
