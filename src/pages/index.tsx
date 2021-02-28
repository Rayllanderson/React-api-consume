import Head from 'next/head'
import React from 'react'
import { CardList } from '../components/CardList'
import { ModalAnime } from '../components/ModalAnime'
import { ModalFilter } from '../components/ModalFilter'
import { SearchBar } from '../components/SearchBar'
import { FilterProvider } from '../contexts/FilterContext'
import { SearchProvider } from '../contexts/SearchContext'

export default function Home() {
  return (
    <div >
      <Head>
        <title>MyAnimeList API</title>
        <link rel="icon" href="/logo.png" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>
      <FilterProvider>
        <SearchProvider>
          <div className="container px-4 mt-3">
            <div className="text-center">
              <img src="/logo.png" alt="logo" className="img-fluid rounded" />
            </div>
            <SearchBar />
            <br />
            <CardList />
          </div>
          <ModalAnime />
          <ModalFilter />
        </SearchProvider>
      </FilterProvider>
    </div>
  )
}
