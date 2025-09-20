import React, { useEffect, useState } from 'react'
import client from '../sanityClient'

export const Scroll = () => {
  const [news, setNews] = useState(null)

  useEffect(() => {
    client
      .fetch(`*[_type == "news"][0] {
        description,
        publishedAt
      }`)
      .then((data) => setNews(data))
      .catch(console.error)
  }, [])

  return (
    <div id="news" className="w-full bg-[#F8F8FF] md:mt-0">
      <h1 className="text-2xl font-bold mb-2 text-center">Latest News</h1>

      <div className="flex justify-center items-center mt-2 h-[60px] w-full bg-orange-400 text-white overflow-hidden">
        {!news ? (
          <p className="animate-infinite-scroll w-full flex">Loading news...</p>
        ) : (
          <p className="animate-infinite-scroll w-full flex whitespace-nowrap">
            {news.description}
          </p>
        )}
      </div>
    </div>
  )
}
