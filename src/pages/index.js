import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Spinner from './Components/Spinner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [genreSpin, setGenreSpin] = useState(0)
  const [modSpin, setModSpin] = useState(0)
  const genres = [
    "atlanta trap",
    "lofi",
    "drake",
    "orchestral",
    "r&b (usher/ne-yo)",
    "future bass/edm",
    "future",
    "migos",
    "post malone",
    "meek mill"
  ]
  const modifier = [
    "none",
    "only 1 melodic instrument",
    "marimba",
    "bells",
    "piano",
    "violin",
    "rhodes",
    "swing rhythm",
    "triplet rhythm",
    // "only ignition keys",
    // "only ethereal earth",
    // "only glaze",
    // "only serum",
    // "only xpand2",
    // "only labs",
    "supersaw",
    "reese",
    // "no distortion",
    "wurlitzer",
    "trumpet",
    "flute",
    "upright bass",
    "FL Keys",
    "CP80",
    "fm epiano",
    "music box",
    "vibraphone",
    "church bells",
    "sax",
    "clarinet",
    "harp",
    "glockenspiel",
    "clavinet",
    "organ"
  ]
  function getRandomIntInclusive(spinner) {
    let max
    if(spinner === 1)
    {
      max = modifier.length
    }
    else
    {
      max = genres.length
    }
    const min = 0
    const range = max - min
    const newVal = Math.floor(Math.random() * range + min)
    if (spinner === 1)
    {
      setModSpin(newVal)
    }
    else
    {
      setGenreSpin(newVal)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-48">
      <div className="relative flex place-items-center justify-center gap-4 w-full">
        <div className='flex flex-col items-center w-1/4'>
          <h2 className="mb-6 text-2xl font-semibold">Genre</h2>
          <Spinner spinVal={genres[genreSpin]} getRandom={getRandomIntInclusive} spinId={0} />
        </div>
        <div className='flex flex-col items-center w-1/4'>
          <h2 className="mb-6 text-2xl font-semibold">Featuring</h2>
          <Spinner spinVal={modifier[modSpin]} getRandom={getRandomIntInclusive} spinId={1} />
        </div>
      </div>
    </main>
  )
}
