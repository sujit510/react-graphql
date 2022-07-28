import React from 'react'
import { useQuery, gql } from '@apollo/client'

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
    #   sujit #this line adds an error
      mission_name
    }
  }
`

export default function TestComponent () {
  const { data, loading, error } = useQuery(FILMS_QUERY)

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  )
}
