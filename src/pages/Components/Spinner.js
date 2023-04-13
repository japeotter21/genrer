import React, { useState, useEffect } from 'react'

export default function Spinner({spinVal, getRandom, spinId}) {
    return (
        <div className="fixed bottom-0 left-0 h-48 py-3 w-full text-center justify-center bg-gray-100 
             px-4 rounded-md dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div
            className="p-8 lg:p-0 mb-4 text-2xl font-semibold"
          >
            {spinVal}
          </div>
          <div>
            <button onClick={()=>getRandom(spinId)}
                class="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >Randomize</button>
          </div>
        </div>
    )
}