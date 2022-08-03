import React, {useEffect, useState} from 'react'
import Link from 'next/link'

export default function SearchBar() {
    const [search, setSearch] = useState(null)
  
  function goMap() {
    if(search) return `/maps/${search}`
    return '/maps'
  }

  useEffect(()=>{
    document.getElementById('search').addEventListener('keypress', (event)=>{
        console.log(event.key)
        if(event.key=='Enter'){

            event.preventDefault();
            document.getElementById('searchButton').click();
        }
    })
  })

  return (
    <div className="text-lg montserrat font-semibold flex flex-row bg-white w-full justify-between mt-5 rounded-full">
                <span className=" text-theme-gray">
                  <input
                    type="text"
                    onChange={e=>{setSearch(e.currentTarget.value)}}
                    id="search"
                    placeholder="type a keyword"
                    className="w-full rounded-full py-1 px-3 focus:outline-none"
                  />
                </span>
                <div
                  href=""
                  className="bg-theme-orange flex items-center justify-center rounded-full px-5 text-black"
                >
                    <Link href={goMap()} passHref>
                        <a id='searchButton' >Search</a>
                    </Link>
                </div>
              </div>
  )
}
