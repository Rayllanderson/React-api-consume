import Head from 'next/head'
import React from 'react'
import { CardList } from '../components/CardList'
import { Filter } from '../components/Filter'
import { ModalAnime } from '../components/ModalAnime'
import { ModalFilter } from '../components/ModalFilter'
import { SearchBar } from '../components/SearchBar'
import { SearchProvider } from '../contexts/SearchContext'

export default function Home() {
  return (
    <div >
      <Head>
        <title>MyAnimeList API</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>
      <SearchProvider>
        <div className="container px-4">
          <SearchBar />
          <Filter />
          <br />
          <CardList />
        </div>
        <ModalAnime />
        <ModalFilter/>
      </SearchProvider>
    </div>
  )
}
