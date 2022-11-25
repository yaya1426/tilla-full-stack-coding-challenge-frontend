import _ from "lodash";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import Layout from "../components/layout";
import { useApp } from "../context/app.context";
import useApiData from "../hooks/use-api-data";
import Airport from "../types/airport";

const Page: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Airport[]>([]);

  const { allAirports, setAllAirports } = useApp();
  const handleChange = (e) => setQuery(e.target.value);

  const debouncedResults = useMemo(() => {
    return _.debounce(handleChange, 500);
  }, []);

  const { data, error, loading } = useApiData<Airport[]>(
    `/api/airports/${query}`,
    [],
    [query],
    !!query || allAirports.length === 0
  );

  useEffect(() => {
    if (data.length > 0 && !loading) {
      if (allAirports.length === 0) {
        setAllAirports(data);
      }
      setResults(data);
    }
  }, [data, loading]);

  useEffect(() => {
    if (!query) {
      setResults(allAirports);
    }
  }, [allAirports, query]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <div className="mt-10 relative shadow-sm">
        <input
          type="text"
          name="query"
          id="query"
          className="focus:ring-blue-600 focus:border-blue-600 block w-full sm:text-sm border-gray-300 text-gray-800 rounded bg-gray-50 p-3"
          placeholder="Search typing..."
          onChange={debouncedResults}
        />
      </div>

      <h2 className="mt-10 text-xl font-semibold">
        Airports
        <span className="rounded-full bg-cyan-400 px-2 text-sm text-white">
          {results.length}
        </span>
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {results.slice(0, 100).map((airport) => (
          <Link
            className="flex items-center p-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
            href={`/airports/${airport.iata.toLowerCase()}`}
            key={airport.iata}
          >
            <span>
              {airport.name}, {airport.city}
            </span>
            <span className="ml-auto text-right	 text-gray-500">
              {airport.country}
            </span>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
