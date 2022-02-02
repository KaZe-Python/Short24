import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center bg-[#5d5f71] min-h-screen text-[#e7e6e3]'>
      <Head>
        <title>Short24</title>
      </Head>
      <Navbar />
      <div className='flex-grow self-center'>
        <Form />
      </div>
      <div className='mb-8'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
