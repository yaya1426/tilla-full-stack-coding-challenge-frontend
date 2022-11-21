import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

import Layout from '../components/layout'
import useApiData from '../hooks/use-api-data'
import Airport from '../types/airport'

const Page: NextPage = () => {
  const [query, setQuery] = useState<string>('')

  const airports = useApiData<Airport[]>(`/api/airports/${query}`, [], [query])

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <h2 className="mt-10 text-xl font-semibold">All Airports</h2>

      <div className="mt-1 relative shadow-sm">
        <input
          type="text"
          name="query"
          id="query"
          className="focus:ring-blue-600 focus:border-blue-600 block w-full sm:text-sm border-gray-300 text-gray-800 rounded bg-gray-50 p-3"
          placeholder="Search by name, IATA, city, or country"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        {airports.map((airport) => (
          <Link
            className="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
            href={`/airports/${airport.iata.toLowerCase()}`}
            key={airport.iata}
          >
            <span>
              {airport.name}, {airport.city}
            </span>
            <span className="ml-auto text-gray-500">{airport.country}</span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Page
