import React, { useState, useEffect } from 'react'

export default function Spinner({spinVal, getRandom, spinId}) {
    return (
        <div className="py-8 text-center justify-center bg-gray-100 bg-opacity-40 flex flex-col gap-5
            border border-neutral-400
             px-5 rounded-md h-1/2 w-full">
          <div
            className=" mb-4 text-2xl font-roboto"
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