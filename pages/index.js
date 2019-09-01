import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  const [termo, setTermo] = useState('')

  const atualizaTermo = event => {
    setTermo(event.target.value.toString());
  }

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <label> Digite o que procura aqui: </label>
      <input type="text" onChange={(e) => {
        atualizaTermo(e)
      }} />
      <Link href={'results/${item}' as={termo}></Link>


      {/* <Link href="results/[slug]" as="results/asx">asx</Link> */}

    </div>
  )
}

export default Home
