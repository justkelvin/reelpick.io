import React from 'react'

function Movie({ params }: { params: { id: string } }) {
    return (
        <div>Movie Name: #{params.id}</div>
    )
}

export default Movie