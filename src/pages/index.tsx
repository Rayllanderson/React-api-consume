import Head from 'next/head'
import React from 'react'
import { Card } from '../components/Card'
import { Modal } from '../components/Modal'
import { SearchBar } from '../components/SearchBar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>

      <div className="container px-4">
        <SearchBar/>
        <br />
        <div className="row row-cols-1 row-cols-md-3">
            <Card/>
            <Card />
            <Card />
        </div>
      </div>

      <Modal/>
    </div>
  )
}
