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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4">
          Next.js template screen
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            commandeered by tatsuyoshi
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center gap-4">
        <Spinner spinVal={genres[genreSpin]} getRandom={getRandomIntInclusive} spinId={0} />
        <Spinner spinVal={modifier[modSpin]} getRandom={getRandomIntInclusive} spinId={1} />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
