import React, { useState } from 'react'


export default function Home() {

    const [value, setValue] = useState(0)


    return (
        <div className='box'>
            <h1>Counter:{value}</h1>

            <div className="container my-5">
                <button onClick={() => setValue(value + 1)} type="button" class="btn btn-primary btn-lg mx-5">+</button>
                <button onClick={() => setValue(value - 1)} type="button" class="btn btn-secondary btn-lg">-</button>
            </div>
        </div>
    )
}
