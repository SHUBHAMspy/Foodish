import Head from 'next/head'
import About from '../components/about'
import Category from '../components/category'
import ContactBanner from '../components/contactBanner'
import Hero from '../components/hero'
import Testimonials from '../components/testimonials'
//import styles from '../styles/globals.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodish</title>
        <meta name="description" content="A Food Delivery Restraunt and Family Dining" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      <Category/>
      <About/>
      <Testimonials/>
      <ContactBanner/>

      
    </>
  )
}
