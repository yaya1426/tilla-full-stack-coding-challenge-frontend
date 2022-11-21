import { NextApiRequest, NextApiResponse } from 'next'

import { allAirports, searchAirports } from '../../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = req.query

  if (search === '') {
    const all = await allAirports()

    res.status(200).json(all)
  }

  const response = await searchAirports(search.toString())
  const airports = response !== undefined ? response : []

  res.status(200).json(airports)
}
