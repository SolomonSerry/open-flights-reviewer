import React from 'react'

function Airlines(props) {
    console.log(props)
  return <div>
        <h1>Theses are the stuff</h1>
        {/* {props.flights.data.map((flight) => {
            return <div key={flight.id}>
                <h2>{flight.attributes.name}</h2>
            </div>
        })} */}
    </div>;
}

export default Airlines